-- Initial database schema for AgriLink
-- This creates all necessary tables and functions

-- Enable necessary extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create profiles table (if using authentication)
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID REFERENCES auth.users ON DELETE CASCADE PRIMARY KEY,
  username TEXT UNIQUE,
  full_name TEXT,
  avatar_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Create crop_health_logs table to store analysis history
CREATE TABLE IF NOT EXISTS public.crop_health_logs (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES auth.users ON DELETE CASCADE,
  latitude DECIMAL(10, 8) NOT NULL,
  longitude DECIMAL(11, 8) NOT NULL,
  ndvi DECIMAL(4, 3) NOT NULL,
  status TEXT NOT NULL CHECK (status IN ('healthy', 'moderate', 'poor', 'no-crops')),
  source TEXT NOT NULL CHECK (source IN ('modis', 'sentinel', 'estimated')),
  climate_data JSONB,
  recommendations TEXT[],
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Create diagnosis_logs table to store crop diagnosis history
CREATE TABLE IF NOT EXISTS public.diagnosis_logs (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES auth.users ON DELETE CASCADE,
  mode TEXT NOT NULL CHECK (mode IN ('disease', 'soil', 'fertilizer', 'weed')),
  image_url TEXT,
  result JSONB NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_crop_health_logs_user_id ON public.crop_health_logs(user_id);
CREATE INDEX IF NOT EXISTS idx_crop_health_logs_created_at ON public.crop_health_logs(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_crop_health_logs_location ON public.crop_health_logs(latitude, longitude);
CREATE INDEX IF NOT EXISTS idx_diagnosis_logs_user_id ON public.diagnosis_logs(user_id);
CREATE INDEX IF NOT EXISTS idx_diagnosis_logs_created_at ON public.diagnosis_logs(created_at DESC);

-- Enable Row Level Security (RLS)
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.crop_health_logs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.diagnosis_logs ENABLE ROW LEVEL SECURITY;

-- Create RLS policies for profiles
CREATE POLICY "Public profiles are viewable by everyone"
  ON public.profiles FOR SELECT
  USING (true);

CREATE POLICY "Users can insert their own profile"
  ON public.profiles FOR INSERT
  WITH CHECK (auth.uid() = id);

CREATE POLICY "Users can update their own profile"
  ON public.profiles FOR UPDATE
  USING (auth.uid() = id);

-- Create RLS policies for crop_health_logs
CREATE POLICY "Users can view their own crop health logs"
  ON public.crop_health_logs FOR SELECT
  USING (auth.uid() = user_id OR user_id IS NULL);

CREATE POLICY "Users can insert their own crop health logs"
  ON public.crop_health_logs FOR INSERT
  WITH CHECK (auth.uid() = user_id OR user_id IS NULL);

-- Create RLS policies for diagnosis_logs
CREATE POLICY "Users can view their own diagnosis logs"
  ON public.diagnosis_logs FOR SELECT
  USING (auth.uid() = user_id OR user_id IS NULL);

CREATE POLICY "Users can insert their own diagnosis logs"
  ON public.diagnosis_logs FOR INSERT
  WITH CHECK (auth.uid() = user_id OR user_id IS NULL);

-- Create function to automatically update updated_at timestamp
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for profiles table
CREATE TRIGGER on_profiles_updated
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_updated_at();

-- Grant necessary permissions
GRANT USAGE ON SCHEMA public TO anon, authenticated;
GRANT ALL ON ALL TABLES IN SCHEMA public TO anon, authenticated;
GRANT ALL ON ALL SEQUENCES IN SCHEMA public TO anon, authenticated;
