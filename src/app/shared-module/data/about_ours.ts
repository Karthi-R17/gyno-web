import { About, AboutList } from "../models/about";

export const aboutOurs: About = {
    aboutTitle: "What we are about",
    aboutDescription: `
<p>
  At <b>QueeWin Gyno Pharmaceuticals</b>, we are committed to improving access to safe,
  effective, and affordable medicines. Our company stands out because of our dedication
  to quality, integrity, and long-term relationships with our partners in healthcare.
</p>

<p>
  We are working with professionals who have 15 years of experience in the medical field.
  It has been established with the vision of marketing quality medicines.
</p>

<p>
  We are committed towards a healthier and happier world. We strive to provide accessible
  and affordable healthcare products.
</p>
`,

    aboutImage: "assets/img/about_ours_image.jpg",
    aboutList: [
        {
            title: "Trusted Quality",
            description: `We source and distribute only certified, high-quality pharmaceutical products,
              ensuring safety and compliance at every stage.`,
            icon: "bx bx-fingerprint"
        },
        {
            title: "Efficient Supply Chain",
            description: `With a streamlined logistics network and dedicated representatives, we ensure fast,
              reliable delivery to pharmacies and healthcare providers.`,
            icon: "bx bx-gift"
        },
        {
            title: "Experienced Team",
            description: `Our team includes experienced professionals and medical representatives who
              understand the needs of the industry and our customers.`,
            icon: "bx bx-atom"
        },
        {
            title: "Customer-Focused Service",
            description: `We work closely with our partners, offering personalized support, product education,
              and flexible solutions tailored to your business.`,
            icon: "bx bx-fingerprint"
        }
    ]
}