
import { useQuery } from "@tanstack/react-query";
import { supabase } from "../integrations/supabase/client";

export type SiteConfig = {
  id: string;
  background_color: string
  bottom_nav_icon_color: string
  bottom_nav_primary_color: string
  bottom_nav_secondary_color: string
  bottom_nav_text_color: string
  button_primary_color: string
  button_secondary_color: string
  created_at: string;
  enable_dark_mode: boolean | null
  enable_weather: boolean | null
  font_size: string | null
  footer_address: string | null
  footer_address_cep: string | null
  footer_contact_email: string | null
  footer_contact_phone: string | null
  footer_copyright_text: string | null
  footer_primary_color: string
  footer_schedule: string | null
  footer_secondary_color: string
  footer_social_facebook: string | null
  footer_social_instagram: string | null
  footer_text_color: string
  header_alerts: any | null
  high_contrast: boolean | null
  language: string | null
  location_city: string | null
  location_country: string | null
  location_lat: number | null
  location_lng: number | null
  location_state: string | null
  meta_author: string | null
  meta_description: string | null
  meta_image: string | null
  meta_title: string | null
  navbar_color: string
  navbar_logo_image: string | null
  navbar_logo_text: string | null
  navbar_logo_type: string
  navbar_social_facebook: string | null
  navbar_social_instagram: string | null
  navigation_links: any | null
  primary_color: string
  secondary_color: string
  text_color: string
  theme_name: string
  updated_at: string
  version: number | null
  weather_api_key: string | null
  login_text_color: string
  signup_text_color: string
  pwa_name: string | null
  pwa_short_name: string | null
  pwa_description: string | null
  pwa_theme_color: string | null
  pwa_background_color: string | null
  pwa_install_message: string | null
  pwa_app_icon: string | null
  admin_accent_color: string
  admin_background_color: string
  admin_card_color: string
  admin_header_color: string
  admin_hover_color: string
  admin_sidebar_color: string
  admin_text_color: string
};

export function useSiteConfig() {
  return useQuery({
    queryKey: ['site-configuration'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("site_configuration")
        .select("*")
        .maybeSingle();
      
      if (error) throw error;
      if (!data) throw new Error("No site configuration found");
      
      return data as SiteConfig;
    },
    staleTime: Infinity,
    gcTime: Infinity,
    retry: false,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
  });
}
