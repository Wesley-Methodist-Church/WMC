<p align="center"><img src="./public/logo.svg"  alt="WMC Logo"/></p>

---

# Introduction

This is a repository for Wesley Methodist Church company profile website.

---

# Tech Stack
<a href="https://nextjs.org/"><img src="https://img.shields.io/badge/next%20js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="NextJS" /></a>
<a href="https://tailwindcss.com/"><img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="TailwindCSS" /></a>
<a href="https://daisyui.com/"><img src="https://img.shields.io/badge/daisyUI-1ad1a5?style=for-the-badge&logo=daisyui&logoColor=white" alt="DaisyUI"/></a>

---

# Requirements

All you need in your computer is
`Node version 18 or later`

---

# Usage

1. Install the node modules and dependencies using NPM

```bash
npm install
```

2. Compile all the assets (css, js, media) to public folder

```bash
npm run dev
```

---

# Pages

Pages for this website are:

<details>
<summary><strong>Home</strong></summary>

``` jsonpath
./app/page.js
```

Components used in the home page are `Navbar`, `Jumbotron`, `Values`, `VisionMission`, `History`, `Prayer`, `Gap`, `Footer`
</details>

<br/>

<details>
<summary><strong>Activities</strong></summary>

``` jsonpath
./app/activities/page.jsx
```

Components used in the Activities page are `Navbar`, `CardActivity`, `Footer`
</details>

<br/>

<details>
<summary><strong>Committee</strong></summary>

``` jsonpath
./app/committee/page.jsx
```

Components used in the Committee page are `Navbar`, `CardMember`, `Footer`
</details>

<br/>

<details>
<summary><strong>Donation</strong></summary>

``` jsonpath
./app/donation/page.jsx
```

Components used in the Donation page are `Navbar`, `Footer`
</details>

---

# Components

Components used in this project are:

<details>
<summary><strong>CardActivity</strong></summary>

``` jsonpath
./app/components/CardActivity.jsx
```

CardActivity is used in the `Activities` page

You need to send `image`, `title`, `date`, `place`, `link`, `description`, `time`, `room`, `contact`, and `person` as props to add a new activity.

</details>

<br/>

<details>
<summary><strong>CardMember</strong></summary>

``` jsonpath
./app/components/CardMember.jsx
```

CardMember is used in the `Committee` page

You need to send `image`, `name`, and `position` as props to add a new member.
</details>

<br/>

<details>
<summary><strong>Connect</strong></summary>

``` jsonpath
./app/components/Connect.jsx
```

Connect is used in the `Footer` component
</details>

<br/>

<details>
<summary><strong>Footer</strong></summary>

``` jsonpath
./app/components/Footer.jsx
```

Footer is used in the `Home`, `Activities`, `Committee`, `Donation` pages
</details>

<br/>

<details>
<summary><strong>Gap</strong></summary>

``` jsonpath
./app/components/Gap.jsx
```

Gap is used to create space between components.
</details>

<br/>

<details>
<summary><strong>History</strong></summary>

``` jsonpath
./app/components/History.jsx
```

History is used in the `Home` page.

How to add a new section in `History` component?
- add a new object in the `histories` array which has period and desc.
- you can add a new paragraph in description by adding `||` in the beginning of the new paragraph.
- you can add quote in the paragraph by adding `quote`.

```
const histories = [
    {
        "period": "The Beginning",
        "desc": "paragraph1 ||quote paragraph2 || paragraph3"
    },
];
```

</details>

<br/>

<details>
<summary><strong>Jumbotron</strong></summary>

``` jsonpath
./app/components/Jumbotron.jsx
```

Jumbotron is used in the `Home` page
</details>

<br/>

<details>
<summary><strong>Navbar</strong></summary>

``` jsonpath
./app/components/Navbar.jsx
```

Navbar is used in the `Home`, `Activities`, `Committee`, `Donation` pages.

There are two types of navbar: `Desktop` and `Mobile`. The `Mobile` navbar is only used in mobile screen size.
</details>

<br/>

<details>
<summary><strong>Prayer</strong></summary>

``` jsonpath
./app/components/Prayer.jsx
```

Prayer is used in the `Home` page
</details>

<br/>

<details>
<summary><strong>Values</strong></summary>

``` jsonpath
./app/components/Values.jsx
```

Values is used in the `Home` page
</details>

<br/>

<details>
<summary><strong>VisionMission</strong></summary>

``` jsonpath
./app/components/VisionMission.jsx
```

VisionMission is used in the `Home` page
</details>

---

# Assets

Every assets can be found in this project is taken from <a href="https://drive.google.com/drive/folders/1ScQF8cf-fzjJ3uPAjixU4uZ4WMNplXO3?usp=sharing" target="_blank">Drive</a>

You can put your assets in `public` folder. Just make sure that your assets are in the `public` folder.

---

# Creator

<a href="https://johanes.vercel.app" target="_blank">Johanes Alberto Siahaan</a>

<a href="mailto:frederickgodiva@students.usu.ac.id">Frederick Godiva</a>