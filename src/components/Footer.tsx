import { useTranslation } from "react-i18next";
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Github,
  MessageCircle,
} from "lucide-react";

const Footer = () => {
  const { t } = useTranslation();

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "Facebook",
      icon: <Facebook />,
      url: "https://www.facebook.com/share/15Lt2wMDen/?mibextid=wwXIfr",
      color: "bg-blue-600 text-white hover:bg-blue-700",
    },
    {
      name: "Instagram",
      icon: <Instagram />,
      url: "https://www.instagram.com/dr_alaa_hegazy_?igsh=MXNseTVmNHExYWtvag==",
      color:
        "bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white hover:opacity-90",
    },
    {
      name: "Twitter",
      icon: <Twitter />,
      url: "#",
      color: "bg-sky-500 text-white hover:bg-sky-600",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin />,
      url: "#",
      color: "bg-blue-700 text-white hover:bg-blue-800",
    },
    {
      name: "GitHub",
      icon: <Github />,
      url: "#",
      color: "bg-gray-800 text-white hover:bg-gray-900",
    },
    {
      name: "WhatsApp",
      icon: <MessageCircle />,
      url: "https://wa.me/+201111106322",
      color: "bg-green-500 text-white hover:bg-green-600",
    },
  ];

  const footerLinks = [
    { name: t("footer.links.privacy"), url: "#" },
    { name: t("footer.links.terms"), url: "#" },
  ];

  return (
    <footer className="bg-secondary/30 py-8">
      <div className="container">
        <div className="flex flex-col items-center">
          <div className="mb-6">
            <a href="#" className="text-2xl font-bold text-primary">
              Portfolio
            </a>
          </div>

          <div className="flex space-x-4 rtl:space-x-reverse mb-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                className={`h-10 w-10 rounded-full flex items-center justify-center transition-colors ${link.color}`}
                aria-label={link.name}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.icon}
              </a>
            ))}
          </div>

          <div className="flex flex-wrap justify-center space-x-4 rtl:space-x-reverse mb-6">
            {footerLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                className="text-foreground/70 hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="text-foreground/60 text-sm">
            <p>
              {t("footer.copyright").replace("2023", currentYear.toString())}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
