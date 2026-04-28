import { createI18n } from "vue-i18n"

const messages = {
  zh: {
    test:"测试",
    nav: { portfolio: "投资案例", team: "AIEX团队", contact: "联系我们" },
    hero: {
      titleLeft: "AI驱动交易",
      titleRight: "重构金融底层",
      slogan: "专注“AI量化交易”与“区块链基础设施”的全周期投资机构",
    },
    offices: {
      zz: "郑州总部",
      kl: "吉隆坡",
      hcm: "胡志明市",
    },
  },
  en: {
    test:"test",
    nav: { portfolio: "Portfolio", team: "Team", contact: "Contact" },
    hero: {
      titleLeft: "AI Driven",
      titleRight: "Finance Rebuilt",
      slogan: "Global VC focusing on AI Quant Trading & Blockchain Infrastructure",
    },
    offices: {
      zz: "Zhengzhou",
      kl: "Kuala Lumpur",
      hcm: "Ho Chi Minh",
    },
  },
}

const i18n = createI18n({
  legacy: false,
  locale: "zh",
  fallbackLocale: "en",
  messages,
})

export default i18n