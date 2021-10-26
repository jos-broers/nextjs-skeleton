import Head from "next/head"
import Code from "@components/Code"
import styles from "@styles/pages/home.module.scss"

const Home = () => {
	const title =
		"Next.js Starter Kit: Featuring ESLint, Preact, Prettier, Sass, Stylelint, TypeScript and much more!"
	const description = "A simple and highly customizable starter kit for any Next.js application."

	return (
		<div className={styles.container}>
			<Head>
				<title>{title}</title>
				<meta name="description" content={description} />
				<meta property="og:title" content={title} />
				<meta property="og:description" content={description} />
			</Head>
			<main className={styles.main}>
				<h1 className={styles.title}>
					Welcome to the{" "}
					<a href="https://github.com/JosBroers/nextjs-starter-kit">Next.js Starter Kit!</a>
				</h1>
				<p className={styles.description}>
					Get started by editing <Code content="pages/index.js" />
				</p>
			</main>
		</div>
	)
}

export default Home
