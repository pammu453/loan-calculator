# 💰 Loan Calculator App

[Live Demo](https://loan-calculator-nwxh.onrender.com)

A modern, single-page Loan Calculator built with **React** and **Material UI**. This app helps users calculate loan EMIs (Equated Monthly Installments), view detailed amortization schedules, and check real-time currency conversions of their EMIs using live exchange rates.

---

## 🚀 Features

- 📈 **Loan EMI Calculation** using standard financial formulas
- 📊 **Dynamic Amortization Schedule** with monthly breakdown
- 🌐 **Real-Time Currency Conversion** via [ExchangeRate-API](https://www.exchangerate-api.com/)
- 🌍 **Paginated Table** for 160+ currencies
- 🌓 **Dark/Light Mode** toggle
- 📱 **Mobile-Responsive Design** with collapsible header navigation
- 💅 Built entirely with **Material UI**

---

## 🧮 EMI Formula

\[
\text{EMI} = \frac{P \times R \times (1+R)^N}{(1+R)^N - 1}
\]

Where:
- `P` = Principal loan amount  
- `R` = Monthly interest rate = annual rate / 12 / 100  
- `N` = Loan duration in months

---

## 🛠️ Tech Stack

- ⚛️ React (Hooks, Context API, Routing)
- 💄 Material UI (MUI) for design
- 🔗 Axios for API requests
- 🔢 ExchangeRate-API for live exchange rate data

---

## 📦 Installation

```bash
git clone https://github.com/yourusername/loan-calculator-app.git
cd loan-calculator-app
npm install
npm run dev
