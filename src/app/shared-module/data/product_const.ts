import { Division } from "../models/division";
import { Product } from "../models/product";
export const productsList: Array<Product> = [
    {
        name: 'Gynova Plus', slug: 'gynova-plus', division: 'gyno', title: "Gynova Plus", subtitle: "Gynova Plus", image: "assets/img/products/empty_syrub_img.jpeg", price: 434.34, mrp: 5454, discounts: 15, badge: "", description: "",
        details: {
            netQty: "1 N",
            hsn: "0231016514H1",
            shelfLife: 1080,
            weight: "70g",
            disclaimer: "This product is not intended to diagnose, treat, cure, or prevent any disease."
        }
    },
    {
        name: 'G Cyst', slug: 'g-cyst', division: 'gyno', title: "G Cyst", subtitle: "G Cyst", image: 'assets/img/products/empty_strib_img.jpeg', price: 434.34, mrp: 5454, discounts: 15, badge: "", description: "",
        details: {
            netQty: "1 N",
            hsn: "0231016514H1",
            shelfLife: 1080,
            weight: "70g",
            disclaimer: "This product is not intended to diagnose, treat, cure, or prevent any disease."
        }
    },
    {
        name: 'Q Win Product', slug: 'q-neolin', division: 'queewin', title: "Q Win Product", subtitle: "Q Win Product", image: 'assets/img/products/empty_strib_img.jpeg', price: 434.34, mrp: 5454, discounts: 15, badge: "", description: "",
        details: {
            netQty: "1 N",
            hsn: "0231016514H1",
            shelfLife: 1080,
            weight: "70g",
            disclaimer: "This product is not intended to diagnose, treat, cure, or prevent any disease."
        }
    },
    {
        name: 'Gynova Plus', slug: 'gynova-plus', division: 'gyno', title: "Gynova Plus", subtitle: "Gynova Plus", image: 'assets/img/products/empty_tabletes_img.jpeg', price: 434.34, mrp: 5454, discounts: 15, badge: "", description: "",
        details: {
            netQty: "1 N",
            hsn: "0231016514H1",
            shelfLife: 1080,
            weight: "70g",
            disclaimer: "This product is not intended to diagnose, treat, cure, or prevent any disease."
        }
    },
    {
        name: 'G Cyst', slug: 'g-cyst', division: 'gyno', title: "G Cyst", subtitle: "G Cyst", image: 'assets/img/products/empty_tabletes_img', price: 434.34, mrp: 5454, discounts: 15, badge: "", description: "",
        details: {
            netQty: "1 N",
            hsn: "0231016514H1",
            shelfLife: 1080,
            weight: "70g",
            disclaimer: "This product is not intended to diagnose, treat, cure, or prevent any disease."
        }
    },
    {
        name: 'Gynova Plus', slug: 'gynova-plus', division: 'gyno', title: "Gynova Plus", subtitle: "Gynova Plus", image: 'assets/img/products/empty_multi_tubt_tab_image.jpeg', price: 434.34, mrp: 5454, discounts: 15, badge: "", description: "",
        details: {
            netQty: "1 N",
            hsn: "0231016514H1",
            shelfLife: 1080,
            weight: "70g",
            disclaimer: "This product is not intended to diagnose, treat, cure, or prevent any disease."
        }
    },
    {
        name: 'Queedm Oil', slug: 'queedm-oil', division: 'queewin', title: "Queedm Oil", subtitle: "Queedm Oil", image: 'assets/img/products/empty_syrub_img.jpeg', price: 434.34, mrp: 5454, discounts: 15, badge: "", description: "",
        details: {
            netQty: "1 N",
            hsn: "0231016514H1",
            shelfLife: 1080,
            weight: "70g",
            disclaimer: "This product is not intended to diagnose, treat, cure, or prevent any disease."
        }
    },
    {
        name: 'Calcigyn D3', slug: 'calcigyn-d3', division: 'ortho', title: "Calcigyn D3", subtitle: "Calcigyn D3", image: 'assets/img/products/empty_syrub_img.jpeg', price: 434.34, mrp: 5454, discounts: 15, badge: "", description: "",
        details: {
            netQty: "1 N",
            hsn: "0231016514H1",
            shelfLife: 1080,
            weight: "70g",
            disclaimer: "This product is not intended to diagnose, treat, cure, or prevent any disease."
        }
    },
    {
        name: 'Queewin 50', slug: 'queewin-50', division: 'queewin', title: "Queewin 50", subtitle: "Queewin 50", image: 'assets/img/products/empty_syrub_img.jpeg', price: 434.34, mrp: 5454, discounts: 15, badge: "", description: "",
        details: {
            netQty: "1 N",
            hsn: "0231016514H1",
            shelfLife: 1080,
            weight: "70g",
            disclaimer: "This product is not intended to diagnose, treat, cure, or prevent any disease."
        }
    }
]

export const divisionList: Array<Division> = [
    {
        id: 1,
        name: "Gyno Cologist",
        division: "gyno",
        icon: 'fas fa-heartbeat',
        description: "Dedicated to advancing women's health with trusted, high-quality gynecological products.",
        detaildescription: "At QueeWin Gyno Pharmaceuticals, our Gynecologist Division is dedicated to women's health and well-being. We offer a specialized range of high-quality gynecological products that support reproductive health, hormonal balance, and maternal care. Trusted by healthcare professionals, our products are designed to meet the evolving needs of modern gynecology with safety, efficacy, and care."
    },
    {
        id: 2,
        name: "Queewin",
        division: "queewin",
        icon: 'fas fa-pills',
        description: "A scientifically formulated supplement designed to support overall health and maintain daily wellnessA professionally formulated medical-grade product designed to support overall health and well-being, offering safe and effective care for daily wellness needs.",
        detaildescription: "This product is scientifically developed to provide comprehensive support for essential health functions. Made with high-quality ingredients, it helps promote balance, enhance overall wellness, and assist the bodys natural processes."
    },
    {
        id: 3,
        name: "Ortho",
        division: "ortho",
        icon: 'fas fa-hospital-user',
        description: "A targeted joint care formulation that helps reduce discomfort, improve mobility, and support long-term joint health.",
        detaildescription: "This advanced Artho formula is specially developed to support joint flexibility, comfort, and mobility. Enriched with ingredients known to help reduce inflammation and stiffness, it provides effective relief from joint discomfort caused by age, physical strain, or arthritis-related issues."
    }
]