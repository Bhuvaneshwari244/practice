# Mandi API Key Setup

## API Key
```
579b464db66ec23bdd0000013a2a6557a38344fb409bc50392dae554
```

## Setup Instructions

### Step 1: Add to Supabase Edge Function Secrets

You need to add this API key to your Supabase project secrets:

1. Go to your Supabase Dashboard: https://supabase.com/dashboard
2. Select your project: `kvtpfhjgiiipqncczpsn`
3. Go to **Settings** → **Edge Functions** → **Secrets**
4. Click **Add Secret**
5. Add:
   - **Name**: `DATA_GOV_API_KEY`
   - **Value**: `579b464db66ec23bdd0000013a2a6557a38344fb409bc50392dae554`
6. Click **Save**

### Step 2: Redeploy Edge Function (if needed)

The Edge Function should automatically pick up the new secret. If not:

1. Go to **Edge Functions** in Supabase Dashboard
2. Find `fetch-mandi-rates` function
3. Click **Redeploy** or wait for it to restart (usually happens automatically)

### Step 3: Test

1. Run your app: `npm run dev`
2. Go to the Mandi Rates page
3. You should see live data from data.gov.in API
4. Check the browser console - it should show: "data.gov.in returned X records"

## How It Works

The `fetch-mandi-rates` Edge Function tries two sources:

1. **Primary**: data.gov.in API (requires API key) ✅ 
2. **Fallback**: eNAM API (no key needed)
3. **Last Resort**: Static data from `src/data/mandiRates.ts`

## Troubleshooting

If live data doesn't work:
- Check Supabase Edge Function logs
- Verify the secret is added correctly
- The function will automatically fall back to eNAM or static data

## Local .env File

The API key has been added to your local `.env` file:
```
VITE_MANDI_API_KEY="579b464db66ec23bdd0000013a2a6557a38344fb409bc50392dae554"
```

Note: This is for reference only. The Edge Function uses the Supabase secret, not the .env file.
