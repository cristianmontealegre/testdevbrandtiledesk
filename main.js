const express = require("express");
const cors = require('cors');

const app = express();
var port = process.env.PORT || 3000;

app.use(cors());

app.get("/", async (req, res) => {
  res.json({
    DASHBOARD: {
      META_TITLE: "Imagicle",
      FAVICON_URL: "https://stage.imagicle.cloud/chat/convai/favicon.ico",
      CUSTOM_COMPANY_HOME_LOGO: true,
      COMPANY_LOGO_PLANET: "assets/img/logos/tiledesk_planet.svg",
      privacy_policy_link_text: "Privacy & Cookie Policy",
      privacy_policy_url:
        "https://www.imagicle.com/en/privacy-cookie-policy/privacy-policy/",
      display_terms_and_conditions_link: true,
      terms_and_conditions_url:
        "https://www.imagicle.com/en/legal-terms/terms-and-conditions-of-sale/",
      "display-news-and-documentation": false,
      display_google_auth_btn: false,
      display_help_in_installation: false,
      display_invite_teammate_btn: false,
      display_contact_us_email: false,
      custom_redirect_after_logout: false,
      after_logout_redirect_URL:
        "https://www.imagicle.com/en/products/conversational-ai/",
      display_chatbots_community: false,
      display_templates_category: false,
      display_change_pwd: false,
      EXTREME_MEASURES: false,
      footer: {
        display_terms_and_conditions_link: true,
        display_star_us_on_github: false,
        display_leave_us_a_feedback: false,
        display_followus_on_x: true,
        followus_on_x_URL: "https://twitter.com/imagicle",
        display_followus_on_fb: true,
        followus_on_fb_URL: "https://www.facebook.com/imagicle",
        display_followus_on_in: true,
        followus_on_in_URL:
          "https://www.linkedin.com/company/imagicle-spa/?originalSubdomain=it",
        display_followus_on_instagram: false,
        followus_on_instagram_URL: "",
        display_followus_on_youtube: true,
        followus_on_youtube_URL: "https://www.youtube.com/user/imagicle",
      },
      recent_project_page: {
        company_logo_width: "130px",
        company_logo_height: "38px",
        company_logo_top: "-12px",
        company_logo_left: "-14px",
      },
      signup_page: {
        display_terms_and_conditions_link: true,
        display_social_proof_container: false,
      },
      handle_invitation_page: {
        company_logo_45x45: "assets/img/logos/tiledesk-solo-logo.png",
      },
    },
    WIDGET: {
      LOGO_CHAT:
        "https://smartflows-eu-public.s3.eu-central-1.amazonaws.com/imagicle-resources/SmartflowsLogo-NoText.svg",
      POWERED_BY:
        "<a tabindex='-1' target='_blank href='https://www.imagicle.com/en/products/conversational-ai/'><img src='https://smartflows-eu-public.s3.eu-central-1.amazonaws.com/imagicle-resources/SmartflowsLogo-NoText.svg'/><span> Powered by Conversational AI</span></a>",
    },
    CHAT: {},
    CDS: {
      META_TITLE: "Design Studio",
      FAVICON_URL:
        "https://tiledesk.com/wp-content/uploads/2022/07/tiledesk_v13-300x300.png",
      INFO_MENU_ITEMS: [
        { key: "FEEDBACK", icon: "", src: "", status: "inactive" },
        { key: "CHANGELOG", icon: "", src: "", status: "inactive" },
      ],
    },
    COMMON: {
      COMPANY_LOGO:
        "https://stage.imagicle.cloud/chat/convai/LogoImagicle-ConTesto.svg",
      COMPANY_LOGO_NO_TEXT:
        "https://stage.imagicle.cloud/chat/convai/LogoImagicle-NoTesto.svg",
      BASE_LOGO:
        "https://blipblip.com/wp-content/uploads/2020/02/logotipo.png",
      BASE_LOGO_NO_TEXT:
        "https://blipblip.com/wp-content/uploads/2020/02/logotipo.png",
      COMPANY_NAME: "BlipBlip",
      BRAND_NAME: "Conversational AI",
      COMPANY_SITE_NAME: "imagicle.com",
      COMPANY_SITE_URL:
        "https://www.imagicle.com/en/products/conversational-ai/",
      CONTACT_US_EMAIL: "",
      CONTACT_SALES_EMAIL: "sales@imagicle.com",
      BRAND_PRIMARY_COLOR: "#00c0f0",
      BRAND_SECONDARY_COLOR: "#002159",
      DOCS: false,
      LOGOUT_ENABLED: false,
    },
  });
});

app.listen(3000, () => {
  console.log("Server running on: ", port);
});
