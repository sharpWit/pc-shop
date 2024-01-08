# PC-Shop online shop on based nextjs v-14 and supabase

[![GitHub repository](https://img.shields.io/badge/github-sharpWit%2Fpc--shop-blue?style=flat&logo=github)](https://github.com/sharpWit/pc-shop)
[![Version](https://img.shields.io/badge/version-0.1.0-blue)](https://github.com/sharpWit/pc-shop)
[![License](https://img.shields.io/badge/license-MIT-blue)](https://github.com/sharpWit/pc-shop/blob/main/LICENSE)

## Description

Introducing an innovative eCommerce platform tailored for Persian speakers, crafted using Next.js v-14 in tandem with Supabase. This feature-rich application seamlessly integrates vital components essential for a thriving online store. Key functionalities include a user-friendly navigation system, an intuitive shopping cart, secure authentication mechanisms, a comprehensive product catalog, dynamic product listings, breadcrumbs for easy navigation, strategically showcased promotional offers, essential contact details, and a sleek loading skeleton for enhanced user experience.

Notably, the platform's modern design adds aesthetic appeal, making it a compelling choice for eCommerce ventures. Whether you're launching a new online store or enhancing an existing one, this app offers a robust foundation. Feel free to explore its capabilities and leverage its features to elevate your eCommerce journey. Your satisfaction is our priority, and we encourage you to use and customize this platform according to your unique requirements.

## Author

[Saeed Khosravi](https://github.com/sharpWit/)

## Table of Contents

- [Description](#description)
- [Author](#author)
- [Requirement](#requirement)
- [Installation](#installation)
- [License](#license)

## Requirement

To ensure the seamless functionality of your app, it is essential to obtain API access from Supabase. Follow these steps to acquire the necessary API key:

### Set Up Environment Variables:

1. **Retrieve Project URL and Anon Key:**

   - Access your project's API settings in the Supabase Dashboard.
   - Obtain your project URL and anon key.

2. **Create Environment Variables File:**

   - In the root directory of your project, create an `.env*.local` file.

3. **Add the Following Environment Variables:**

   - Open the `.env*.local` file and include the following lines:

     ```env
     NEXT_PUBLIC_SUPABASE_ANON_KEY=supabase_anon_key
     NEXT_PUBLIC_SUPABASE_URL=supabase_address
     ```

     Replace `supabase_anon_key` and `supabase_address` with the actual anon key and URL obtained from your Supabase project.

### Important Note:

This step is critical for enabling your app to seamlessly fetch and display content from the Supabase API. It is essential to keep your API keys secure and avoid sharing them publicly to maintain the integrity and security of your application.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/sharpWit/pc-shop.git
   cd pc-shop
   ```

2. Install dependencies:

   ```bash

   npm install
   ```

3. Usage

   To run the application locally, use the following command:

   ```bash

   npm run dev
   ```

   Visit http://localhost:3000 in your browser to view the application.

## License

This project is licensed under the [MIT License](https://github.com/sharpWit/pc-shop/blob/main/LICENSE) - see the LICENSE file for details.
