import { HomePageContent } from "~/components/home/homepage-content";
import { HomePageContributing } from "~/components/home/homepage-contributing";
import { HomepageHeader } from "~/components/home/homepage-header";
import { HomePageLatestNews } from "~/components/home/homepage-latest-news";
import { HomePageSection } from "~/components/home/homepage-section";
import { HomePageStart } from "~/components/home/homepage-start";
import { HomePageWelcome } from "~/components/home/homepage-welcome";
import { HomePageWhatsAppCTA } from "~/components/home/homepage-whatsapp-cta";
import { Page } from "~/components/layout/page";
import { Alert } from "~/components/ui/alert";
import { Container } from "~/components/ui/container";
import { attributes, html } from "~/lib/home-page";
import { htmrTransform } from "~/lib/htmr-transformers";
import siteConfig from "~/lib/site-config";

import { ClockIcon } from "@heroicons/react/outline";
import htmr from "htmr";
import { NextSeo } from "next-seo";

const meta = {
  title: `${siteConfig.site_tagline} | ${siteConfig.site_name}`,
};

interface LastUpdatedAlertProps {
  className?: string;
}

const LastUpdatedAlert = ({ className }: LastUpdatedAlertProps) => (
  <Alert accentBorder className={className} icon={ClockIcon}>
    <p className="text-sm">
      Pembaruan terakhir pada{" "}
      {new Date(attributes.last_updated_time).toLocaleString("id", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        timeZone: "Asia/Jakarta",
        timeZoneName: "short",
      })}
    </p>
  </Alert>
);

const HomePage = () => (
  <Page>
    <NextSeo title={meta.title} titleTemplate="%s" />
    <HomepageHeader src={attributes.home_banner_image_path} />
    <HomePageContent>
      <Container className="space-y-3">
        <HomePageStart />
        <HomePageLatestNews />
        <HomePageContributing />
        <HomePageWhatsAppCTA />
        <LastUpdatedAlert />
        <HomePageWelcome />
        <HomePageSection className="px-4 py-6">
          <article className="prose prose-indigo">
            {htmr(html, { transform: htmrTransform })}
          </article>
        </HomePageSection>
        <style jsx>{`
          article {
            margin: 0 auto;
          }
          h1 {
            text-align: center;
          }
        `}</style>
      </Container>
    </HomePageContent>
  </Page>
);

export default HomePage;
