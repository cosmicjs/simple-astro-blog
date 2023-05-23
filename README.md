# Simple Astro Blog built with Astro and Cosmic

To build this app, we’re going to use the following technologies:

- [Astro](https://astro.build/) - A React framework for production that makes it easy to spin up a full-stack application.
- [Cosmic](https://www.cosmicjs.com/) - A Headless CMS enables the independence of the data (content) layer and gives us the ability to quickly manage template content.
- [Tailwind CSS](https://tailwindcss.com/) - A performant utility-first CSS framework that can be composed directly in your markup.

### Links

- [Install the template](https://www.cosmicjs.com/marketplace/templates/simple-astro-blog)
- [View the live demo](https://simple-astro-blog.vercel.app/)

## Screenshots

![Home Page](https://imgix.cosmicjs.com/e0b61790-32db-11ed-8a37-f1952c73e588-astro-cms-screenshot-4.png?w=1200&auto=format)

![Blog Page](https://cdn.cosmicjs.com/cbd90ee0-32db-11ed-8a37-f1952c73e588-astro-cms-screenshot-3.png)

## Getting started

### Environment Variables

You'll need to create an .env file in the root of the project. Log in to Cosmic and from Bucket Settings > API Access take the following values:

```
//.env
PUBLIC_COSMIC_BUCKET_SLUG=your_cosmic_slug
PUBLIC_COSMIC_READ_KEY=your_cosmic_read_key
```

Install the dependencies with

```
pnpm install
# or
yarn install
# or
npm install
```

Then run the development server:

```
pnpm run dev
# or
yarn dev
# or
npm run dev
```

Open [http://localhost:3000](http://localhost:3000/) with your browser to see the result.

You can start editing the page by modifying `src/pages/index.astro`. The page auto-updates as you edit the file.

## Deploy on Vercel

<p>Use the following button to deploy to <a href="https://vercel.com/" rel="noopener noreferrer" target="_blank">Vercel</a>. You will need to add API accesss keys as environment variables. Find these in <em>Bucket Settings &gt; API Access</em>.</p>
<p>
<a href="https://vercel.com/new/clone?env=PUBLIC_COSMIC_BUCKET_SLUG,PUBLIC_COSMIC_READ_KEY&repository-url=https://github.com/cosmicjs/simple-astro-blog/tree/api-v3" rel="noopener noreferrer" target="_blank"><img src="https://cdn.cosmicjs.com/d3f0d5e0-c064-11ea-9a05-6f8a16b0b14c-deploy-to-vercel.svg" style="width: 100px;" class="fr-fic fr-dib fr-fil"></a>
</p>

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

Your feedback and contributions are welcome!
