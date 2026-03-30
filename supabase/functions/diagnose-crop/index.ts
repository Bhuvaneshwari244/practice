/// <reference path="./types.d.ts" />
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

// Updated: 2026-03-30
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

serve(async (req: Request) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const { imageBase64, plantPart, language, mode } = await req.json();
    
    // Use Google Gemini API directly instead of Lovable
    const GEMINI_API_KEY = Deno.env.get("GEMINI_API_KEY");
    if (!GEMINI_API_KEY) {
      console.error("GEMINI_API_KEY not found in environment");
      return new Response(JSON.stringify({ 
        error: "AI service not configured. Please add GEMINI_API_KEY to Supabase Edge Function secrets.\n\nSteps:\n1. Go to Supabase Dashboard\n2. Navigate to Edge Functions\n3. Click on 'diagnose-crop' function\n4. Add secret: GEMINI_API_KEY with your Google Gemini API key\n\nGet API key from: https://makersuite.google.com/app/apikey" 
      }), {
        status: 500, 
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const langNames: Record<string, string> = {
      hi: "Hindi", te: "Telugu", ta: "Tamil", kn: "Kannada", ml: "Malayalam",
      mr: "Marathi", bn: "Bengali", gu: "Gujarati", pa: "Punjabi", or: "Odia",
      as: "Assamese", ur: "Urdu", sd: "Sindhi", ks: "Kashmiri", ne: "Nepali",
      sa: "Sanskrit", mai: "Maithili", doi: "Dogri", kok: "Konkani", mni: "Manipuri",
      sat: "Santali", bodo: "Bodo",
    };
    const langName = langNames[language] || "";

    let systemPrompt: string;
    let userPrompt: string;

    if (mode === "weed") {
      systemPrompt = `You are an expert weed scientist. Analyze the weed image and provide practical identification and control information.

IMPORTANT: Respond ONLY in valid JSON format:
{
  "weedName": "Common name",
  "scientificName": "Scientific name",
  "family": "Plant family",
  "weedType": "Broadleaf / Grass / Sedge / Vine / Shrub",
  "invasiveness": "Low / Moderately Invasive / Highly Invasive",
  "characteristics": "Key identifying features - leaf shape, flower, stem, height (2-3 sentences)",
  "impactOnCrops": "How it affects crops - competition for water, nutrients, yield loss (2-3 sentences)",
  "affectedCrops": "Crops most affected (1-2 sentences)",
  "controlMethods": "Practical control - hand pulling timing, hoeing, mulching depth, cultivation (2-3 sentences)",
  "organicControl": "Organic methods - mulching materials, cover crops, flame weeding, timing (2-3 sentences)",
  "chemicalControl": "Herbicide recommendations - specific names with rates (e.g., Glyphosate 41% @ 2ml/liter), pre/post-emergence, timing (2-3 sentences)",
  "preventionTips": "Prevention strategies - field sanitation, crop rotation, competitive planting (2-3 sentences)",
  "bestTimeToControl": "Optimal timing - growth stage, season, weather (1-2 sentences)",
  "waterManagement": "Irrigation tips to suppress weed - method, timing, frequency (1-2 sentences)"
}
${langName ? `IMPORTANT: ALL values must be in ${langName} language.` : ""}`;

      userPrompt = "Identify this weed and provide practical control methods.";
    } else if (mode === "fertilizer") {
      systemPrompt = `You are a fertilizer specialist. Analyze the fertilizer image and provide practical application advice.

IMPORTANT: Respond ONLY in valid JSON format:
{
  "fertilizerName": "Name/brand or type identified",
  "fertilizerType": "Chemical / Organic / Bio-fertilizer / Mixed",
  "composition": "NPK ratio (e.g., 10-26-26) or main nutrients",
  "nutrients": "Key nutrients - N, P, K, micronutrients (1-2 sentences)",
  "suitableCrops": "Best crops for this fertilizer (2-3 sentences)",
  "applicationMethod": "How to apply - broadcasting, side dressing, foliar spray, fertigation (2-3 sentences)",
  "dosage": "Recommended amount - kg/acre for different crops (2-3 sentences)",
  "waterRequirement": "Water needed - mixing ratio, irrigation after application, liters/acre (2-3 sentences)",
  "applicationTiming": "When to apply - growth stage, season, split doses (2-3 sentences)",
  "soilSuitability": "Best soil types - pH range, texture (1-2 sentences)",
  "precautions": "Safety - storage, handling, protective gear (2-3 sentences)",
  "alternatives": "Organic alternatives - compost, vermicompost, FYM with rates (2-3 sentences)"
}
${langName ? `IMPORTANT: ALL values must be in ${langName} language.` : ""}`;

      userPrompt = "Analyze this fertilizer and provide application recommendations.";
    } else if (mode === "soil") {
      systemPrompt = `You are a soil scientist. Analyze the soil image and provide practical improvement advice.

IMPORTANT: Respond ONLY in valid JSON format:
{
  "soilType": "Type (Clay, Sandy, Loamy, Red, Black, etc.)",
  "color": "Color and what it indicates (1-2 sentences)",
  "texture": "Texture description - particle size, feel (1-2 sentences)",
  "moistureLevel": "Low / Medium / High",
  "phEstimate": "pH range (e.g., 6.0-6.5 Slightly Acidic)",
  "organicMatter": "Low / Medium / High",
  "fertility": "Low / Medium / High / Very High",
  "fertilityTips": "How to improve - compost amount, FYM, green manure, biofertilizers (3-4 sentences)",
  "soilMaintenance": "Maintenance practices - mulching, crop rotation, minimal tillage (2-3 sentences)",
  "suitableCrops": "Best crops for this soil - cereals, vegetables, fruits (2-3 sentences)",
  "waterRequirement": "Irrigation needs - liters/acre, frequency, method (drip/flood/sprinkler) (2-3 sentences)",
  "waterRetention": "Poor / Moderate / Good / Excellent",
  "drainage": "Poor / Moderate / Good / Excessive",
  "improvements": "Specific amendments - lime/gypsum/sand amounts, organic matter (2-3 sentences)",
  "warnings": "Concerns - salinity, erosion, compaction, deficiencies (1-2 sentences)"
}
${langName ? `IMPORTANT: ALL values must be in ${langName} language.` : ""}`;

      userPrompt = "Analyze this soil and provide improvement recommendations.";
    } else {
      systemPrompt = `You are an expert agricultural scientist and plant pathologist. Analyze the uploaded image of a ${plantPart || "plant"} and provide a comprehensive diagnosis.

IMPORTANT: Respond ONLY in valid JSON format with this exact structure:
{
  "disease": "Name of the disease (e.g., Late Blight, Powdery Mildew)",
  "cropName": "Name of the crop/plant identified (e.g., Tomato, Wheat, Rice)",
  "scientificName": "Scientific name of the pathogen (e.g., Phytophthora infestans)",
  "severity": "Low" or "Medium" or "High" or "Critical",
  "affectedPart": "${plantPart || "Unknown"}",
  "confidence": number between 0 and 100,
  "cause": "Brief explanation of what causes this disease - pathogen type, how it spreads, favorable conditions (2-3 sentences)",
  "symptoms": "Key visible symptoms - color changes, spots, wilting, deformities (2-3 sentences)",
  "treatment": "Practical treatment steps - specific fungicide/pesticide names with dosage (e.g., Mancozeb 75% WP @ 2g/liter), application frequency, spray timing (3-4 sentences)",
  "organicTreatment": "Natural alternatives - neem oil dosage, botanical extracts, bio-pesticides (2-3 sentences)",
  "prevention": "Prevention tips - crop rotation, resistant varieties, field sanitation, proper spacing (3-4 sentences)",
  "soilCare": "Soil management advice - amendments, pH, drainage, organic matter (2-3 sentences)",
  "waterRequirement": "Irrigation advice - liters per plant/acre, frequency, method (drip/sprinkler), avoid over/under watering (2-3 sentences)"
}

Keep responses concise and practical. Focus on actionable information farmers can use immediately.
${langName ? `IMPORTANT: ALL text field values in the JSON MUST be written in ${langName} language. The JSON keys must remain in English, but ALL values must be in ${langName}.` : ""}`;

      userPrompt = `Analyze this ${plantPart || "plant"} image. Identify the crop, disease, and provide practical treatment advice.`;
    }

    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_API_KEY}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contents: [{
          parts: [
            { text: systemPrompt + "\n\n" + userPrompt },
            { 
              inline_data: {
                mime_type: imageBase64.startsWith('data:') 
                  ? imageBase64.split(';')[0].split(':')[1] 
                  : 'image/jpeg',
                data: imageBase64.replace(/^data:image\/\w+;base64,/, '')
              }
            }
          ]
        }],
        generationConfig: {
          temperature: 0.4,
          topK: 32,
          topP: 1,
          maxOutputTokens: 8192,
        }
      }),
    });

    if (!response.ok) {
      const status = response.status;
      if (status === 429) {
        return new Response(JSON.stringify({ error: "Rate limit exceeded. Please try again in a moment." }), {
          status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (status === 402) {
        return new Response(JSON.stringify({ error: "AI credits exhausted. Please add credits." }), {
          status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const errorText = await response.text();
      console.error("AI gateway error:", status, errorText);
      throw new Error(`AI gateway error: ${status}`);
    }

    const data = await response.json();
    const content = data.candidates?.[0]?.content?.parts?.[0]?.text || "";

    let result;
    try {
      // Try to extract JSON from markdown code blocks first
      const jsonMatch = content.match(/```(?:json)?\s*([\s\S]*?)```/);
      let jsonStr = jsonMatch ? jsonMatch[1].trim() : content.trim();
      
      // If content starts with { or [, it's likely raw JSON
      if (!jsonStr.startsWith('{') && !jsonStr.startsWith('[')) {
        // Try to find JSON object in the content
        const jsonStart = content.indexOf('{');
        const jsonEnd = content.lastIndexOf('}');
        if (jsonStart !== -1 && jsonEnd !== -1) {
          jsonStr = content.substring(jsonStart, jsonEnd + 1);
        }
      }
      
      result = JSON.parse(jsonStr);
    } catch {
      if (mode === "soil") {
        result = {
          soilType: "Analysis Complete", color: content, texture: "See analysis", moistureLevel: "Medium",
          phEstimate: "6.0-7.0", organicMatter: "Medium", fertility: "Medium",
          fertilityTips: content, soilMaintenance: "Consult local expert", suitableCrops: "Various",
          waterRetention: "Moderate", drainage: "Moderate", improvements: "Add organic compost", warnings: "None detected",
        };
      } else if (mode === "fertilizer") {
        result = {
          fertilizerName: "Analysis Complete", fertilizerType: "Unknown", composition: content,
          nutrients: "See analysis", suitableCrops: "Various", applicationMethod: "Consult label",
          dosage: "Follow manufacturer instructions", bestSeason: "Varies by crop",
          soilSuitability: "General", precautions: "Handle with care", alternatives: "Organic compost",
          quality: "Cannot Determine", warnings: "None detected",
        };
      } else if (mode === "weed") {
        result = {
          weedName: "Analysis Complete", scientificName: "Unknown", family: "Unknown",
          weedType: "Unknown", origin: "Unknown", invasiveness: "Moderately Invasive",
          growthHabit: "Unknown", lifeCycle: "Unknown", characteristics: content,
          impactOnCrops: "See analysis", affectedCrops: "Various crops",
          controlMethods: "Consult local agricultural expert", organicControl: "Hand pulling, mulching",
          chemicalControl: "Consult herbicide specialist", preventionTips: "Maintain healthy crop cover",
          bestTimeToControl: "Early growth stage", economicImpact: "Varies by infestation level",
        };
      } else {
        result = {
          disease: "Analysis Complete", severity: "Medium", affectedPart: plantPart || "Unknown",
          confidence: 75, treatment: content, prevention: "Consult a local agricultural expert.",
          organicTreatment: "Use neem-based solutions.", symptoms: "See analysis", cause: "Requires further analysis",
          soilCare: "Maintain soil health with regular organic matter addition.",
        };
      }
    }

    // Fallback for fertilizer parse failure
    if (mode === "fertilizer" && result.disease) {
      result = {
        fertilizerName: "Analysis Complete", fertilizerType: "Unknown", composition: content,
        nutrients: "See analysis", suitableCrops: "Various", applicationMethod: "Consult label",
        dosage: "Follow manufacturer instructions", bestSeason: "Varies by crop",
        soilSuitability: "General", precautions: "Handle with care", alternatives: "Organic compost",
        quality: "Cannot Determine", warnings: "None detected",
      };
    }

    // Fallback for weed parse failure
    if (mode === "weed" && result.disease) {
      result = {
        weedName: "Analysis Complete", scientificName: "Unknown", family: "Unknown",
        weedType: "Unknown", origin: "Unknown", invasiveness: "Moderately Invasive",
        growthHabit: "Unknown", lifeCycle: "Unknown", characteristics: content,
        impactOnCrops: "See analysis", affectedCrops: "Various crops",
        controlMethods: "Consult local agricultural expert", organicControl: "Hand pulling, mulching",
        chemicalControl: "Consult herbicide specialist", preventionTips: "Maintain healthy crop cover",
        bestTimeToControl: "Early growth stage", economicImpact: "Varies by infestation level",
      };
    }

    // Tag result with mode
    result._mode = mode || "disease";

    return new Response(JSON.stringify(result), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("diagnose-crop error:", e);
    return new Response(JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }), {
      status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
