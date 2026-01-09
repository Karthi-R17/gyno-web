import { Division } from "../models/division";
import { Product } from "../models/product";
export const productsList: Product[] = [
    {
        name: 'Gynova Plus',
        slug: 'gynova-plus',
        division: 'gyno',
        indication: 'PCOS Management',
        image: "assets/img/products/gynova plus.jpg",
        badge: "",
        description: "",
        details: {
            pack: '1 * 10',
            indication: 'Polycystic ovary syndrome, Assisted Reproductive Technology',
            dose: 'ONCE DAILY (3 - 6month)',
            disclaimer: "This product is not intended to diagnose, treat, cure, or prevent any disease."
        }
    },
    {
        name: 'BlastoQ300',
        slug: 'blastoq300',
        division: 'gyno',
        indication: 'Ensure Embryonic Development',
        image: "assets/img/products/BALSTOQ300.jpg",
        badge: "",
        description: "",
        details: {
            pack: '1 * 10',
            indication: 'Quality OVA Hope for Motherwood',
            dose: 'ONCE DAILY (3 months)',
            disclaimer: "This product is not intended to diagnose, treat, cure, or prevent any disease."
        }
    },
    {
        name: 'BlastoQforte',
        slug: 'blastoqforte',
        division: 'gyno',
        indication: 'Male Infertility',
        image: "assets/img/products/BLASTOQFORTE.jpg",
        badge: "",
        description: "",
        details: {
            pack: '1 * 10',
            indication: 'Compleate Male Reproductive Health',
            dose: 'ONCE DAILY (3 to 6 months)',
            disclaimer: "This product is not intended to diagnose, treat, cure, or prevent any disease."
        }
    },
    {
        name: 'Q Andro 75',
        slug: 'q-andro-75',
        division: 'gyno',
        indication: 'Fosters Oocyte Quality And Quantity',
        image: "assets/img/products/Q ANDRO 75 TAB.png",
        badge: "",
        description: "",
        details: {
            pack: '1 * 10',
            indication: 'Restores reserve Better Quality Oocytes',
            dose: 'ONCE DAILY',
            disclaimer: "This product is not intended to diagnose, treat, cure, or prevent any disease."
        }
    },
    {
        name: 'Q fert M',
        slug: 'q-fert-m',
        division: 'gyno',
        indication: 'Male Infertility',
        image: "assets/img/products/Qfert M Carton.jpg",
        badge: "",
        description: "",
        details: {
            pack: '10 * 10',
            indication: 'Improves Fertilization & Pregnancy Rates',
            dose: 'OD/BD (3 TO 6 Months)',
            disclaimer: "This product is not intended to diagnose, treat, cure, or prevent any disease."
        }
    },
    {
        name: 'Q Cyst',
        slug: 'q-cyst',
        division: 'gyno',
        indication: 'PCOS Management ',
        image: "assets/img/products/Q-Cyst.jpg",
        badge: "",
        description: "",
        details: {
            pack: '10 * 10',
            indication: 'Restoring Hormonal Harmony & Fertility',
            dose: 'OD/BD (3 TO 6 Months)',
            disclaimer: "This product is not intended to diagnose, treat, cure, or prevent any disease."
        }
    },
    {
        name: 'Jeosital M',
        slug: 'jeosital-m',
        division: 'gyno',
        indication: 'PCOS Management',
        image: "assets/img/products/jeosital m.png",
        badge: "",
        description: "",
        details: {
            pack: '1 * 10',
            indication: 'Rebalancing PCOS at its Root',
            dose: 'OD/BD (3 TO 6 Months)',
            disclaimer: "This product is not intended to diagnose, treat, cure, or prevent any disease."
        }
    },
    {
        name: 'Jeosital DS',
        slug: 'jeosital-ds',
        division: 'gyno',
        indication: 'Obese PCOS Management',
        image: "assets/img/products/jeosital DS.png",
        badge: "",
        description: "",
        details: {
            pack: '1 * 10',
            indication: 'in overweight and obese pcos associated with infertility',
            dose: 'Once Daily (3 TO 6 Months)',
            disclaimer: "This product is not intended to diagnose, treat, cure, or prevent any disease."
        }
    },
    {
        name: 'Jeo Dha Plus',
        slug: 'jeo-dha-plus',
        division: 'gyno',
        indication: 'Brain Development',
        image: "assets/img/products/JEO DHA PLUS.png",
        badge: "",
        description: "",
        details: {
            pack: '10 * 10',
            indication: 'To Support Fetal Brain Development',
            dose: 'Once Daily',
            disclaimer: "This product is not intended to diagnose, treat, cure, or prevent any disease."
        }
    },
    {
        name: 'Ique Fert 300',
        slug: 'ique-fert-300',
        division: 'gyno',
        indication: 'Male Infertility',
        image: "assets/img/products/IQEFERT 300.jpg",
        badge: "",
        description: "",
        details: {
            pack: '1 * 10',
            indication: 'The Mitochondrial Fertility Booster',
            dose: 'Once Daily (3 TO 6 Months)',
            disclaimer: "This product is not intended to diagnose, treat, cure, or prevent any disease."
        }
    },
    {
        name: 'Ique Gest 200',
        slug: 'ique-gest-200',
        division: 'gyno',
        indication: 'Lutal Phase Defect',
        image: "assets/img/products/ique gest.png",
        badge: "",
        description: "",
        details: {
            pack: '1 * 10',
            indication: 'Natural Support For a Healthy Pregnancy',
            dose: 'OD/BD',
            disclaimer: "This product is not intended to diagnose, treat, cure, or prevent any disease."
        }
    },
    {
        name: 'DYDROGOAL 10mg',
        slug: 'dydrogoal-10mg',
        division: 'gyno',
        indication: 'Lutal Phase Defect',
        image: "assets/img/products/dydrogoal.png",
        badge: "",
        description: "",
        details: {
            pack: '1 * 10',
            indication: 'Reduces Risk Of Miscarriage in Early Gestation',
            dose: 'OD/BD',
            disclaimer: "This product is not intended to diagnose, treat, cure, or prevent any disease."
        }
    },
    {
        name: 'V FIT',
        slug: 'v-fit',
        division: 'gyno',
        indication: 'Obese - PCOD',
        image: "assets/img/products/v fit.png",
        badge: "",
        description: "",
        details: {
            pack: '10 * 10',
            indication: 'weight Control & Fertility Balance',
            dose: '1 to 3 Capsules per day',
            disclaimer: "This product is not intended to diagnose, treat, cure, or prevent any disease."
        }
    },
    {
        name: 'Gynargin 1g',
        slug: 'gynargin 1g',
        division: 'gyno',
        indication: 'IUGR',
        image: "assets/img/products/GYNARGIN 1G.jpg",
        badge: "",
        description: "",
        details: {
            pack: '10 * 10',
            indication: 'Erectile dysfunction',
            dose: 'OD/BD',
            disclaimer: "This product is not intended to diagnose, treat, cure, or prevent any disease."
        }
    },
    {
        name: 'Gynargin Sachet',
        slug: 'gynargin-sachet',
        division: 'gyno',
        indication: 'IUGR',
        image: "assets/img/products/sachet.jpg",
        badge: "",
        description: "",
        details: {
            pack: '1 * 20',
            indication: 'Prevents pregnancy complications',
            dose: 'OD/BD',
            disclaimer: "This product is not intended to diagnose, treat, cure, or prevent any disease."
        }
    },
    {
        name: 'GYNOLET 2.5mg',
        slug: 'gynolet-2.5mg',
        division: 'gyno',
        indication: 'Super Ovulation',
        image: "assets/img/products/GynoLet.jpg",
        badge: "",
        description: "",
        details: {
            pack: '10 * 10',
            indication: 'Science Backed Fertility Support in IVF',
            dose: 'once daily 3 to 7th day',
            disclaimer: "This product is not intended to diagnose, treat, cure, or prevent any disease."
        }
    },
    {
        name: 'GYNOLET 5mg',
        slug: 'gynolet-5mg',
        division: 'gyno',
        indication: 'Super Ovulation',
        image: "assets/img/products/gynolet 5mg.jpg",
        badge: "",
        description: "",
        details: {
            pack: '1 * 5',
            indication: 'Science Backed Fertility Support in IVF',
            dose: 'once daily 3 to 7th day',
            disclaimer: "This product is not intended to diagnose, treat, cure, or prevent any disease."
        }
    },
    {
        name: 'CALCIGYN D3',
        slug: 'calcigyn-d3',
        division: 'gyno',
        indication: 'Bone Strength',
        image: "assets/img/products/CalciGyn D3.jpg",
        badge: "",
        description: "",
        details: {
            pack: '10 * 10',
            indication: 'Life Long Bone Strength',
            dose: 'OD/BD',
            disclaimer: "This product is not intended to diagnose, treat, cure, or prevent any disease."
        }
    },
    {
        name: 'FERROGYN XT',
        slug: 'ferrogyn-xt',
        division: 'gyno',
        indication: 'BLOOD HEALTH',
        image: "assets/img/products/Ferrogyn-XT.jpg",
        badge: "",
        description: "",
        details: {
            pack: '10 * 10',
            indication: 'IRON DEFICIANCY',
            dose: 'Once Daily',
            disclaimer: "This product is not intended to diagnose, treat, cure, or prevent any disease."
        }
    },
    {
        name: 'PANTOGYN 40',
        slug: 'pantogyn-40',
        division: 'gyno',
        indication: 'GERD & ZES',
        image: "assets/img/products/Pantogyn-40.jpg",
        badge: "",
        description: "",
        details: {
            pack: '10 * 10',
            indication: 'HIGH RESPONSE FOR GERD',
            dose: 'OD/BD',
            disclaimer: "This product is not intended to diagnose, treat, cure, or prevent any disease."
        }
    },
    {
        name: 'PANTOGYN DSR',
        slug: 'pantogyn-dsr',
        division: 'gyno',
        indication: 'GERD & ZES',
        image: "assets/img/products/PANTOGYN DSR.jpg",
        badge: "",
        description: "",
        details: {
            pack: '10 * 10',
            indication: 'HIGH RESPONSE FOR GERD',
            dose: 'OD/BD',
            disclaimer: "This product is not intended to diagnose, treat, cure, or prevent any disease."
        }
    },
    {
        name: 'M FIN 25',
        slug: 'm-fin-25',
        division: 'gyno',
        indication: 'First line theropy for Male',
        image: "assets/img/products/M FIN 25.png",
        badge: "",
        description: "",
        details: {
            pack: '10 * 10',
            indication: 'ENHANCING SPERM HEALTH FOR CONCEPTION',
            dose: '25th DAY TO UPTO 6 MONTHS',
            disclaimer: "This product is not intended to diagnose, treat, cure, or prevent any disease."
        }
    },
    {
        name: 'M FIN 50',
        slug: 'm-fin-50',
        division: 'gyno',
        indication: 'OVULATION',
        image: "assets/img/products/M FIN 50.png",
        badge: "",
        description: "",
        details: {
            pack: '10 * 10',
            indication: 'REDUCES THE RISK OF INFERTILITY',
            dose: '25th DAY TO UPTO 6 MONTHS',
            disclaimer: "This product is not intended to diagnose, treat, cure, or prevent any disease."
        }
    },
    {
        name: 'M FIN 100',
        slug: 'm-fin-100',
        division: 'gyno',
        indication: 'OVULATION',
        image: "assets/img/products/M FIN 100.png",
        badge: "",
        description: "",
        details: {
            pack: '10 * 10',
            indication: 'REDUCES THE RISK OF INFERTILITY',
            dose: '25th DAY TO UPTO 6 MONTHS',
            disclaimer: "This product is not intended to diagnose, treat, cure, or prevent any disease."
        }
    },
    {
        name: 'QUEEWIN ACT',
        slug: 'queewin act',
        division: 'gyno',
        indication: 'The Active Trio for Antenatal Wellness',
        image: "assets/img/products/QUEEWIN ACT.jpg",
        badge: "",
        description: "",
        details: {
            pack: '10 * 10',
            indication: 'Reduces risk of Neural Tube Defect',
            dose: '1 to 3 tablets per day',
            disclaimer: "This product is not intended to diagnose, treat, cure, or prevent any disease."
        }
    },
]

export const divisionList: Array<Division> = [
    {
        id: 1,
        name: "Gynecologist",
        division: "gyno",
        icon: 'fas fa-heartbeat',
        description: "Dedicated to advancing women's health with trusted, high-quality gynecological products.",
        detaildescription: "At QueeWin Gyno Pharmaceuticals, our Gynecologist Division is dedicated to women's health and well-being. We offer a specialized range of high-quality gynecological products that support reproductive health, hormonal balance, and maternal care. Trusted by healthcare professionals, our products are designed to meet the evolving needs of modern gynecology with safety, efficacy, and care."
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