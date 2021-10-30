import Head from "next/head"
import Code from "@components/Code"
import styles from "@styles/pages/home.module.scss"
import Container from "@components/Container"
import ExternalLink from "@components/ExternalLink"

const Home = () => {
	const title =
		"Next.js Starter Kit: Featuring ESLint, Preact, Prettier, Sass, Stylelint, TypeScript and much more!"
	const description = "A simple and highly customizable starter kit for any Next.js application."

	return (
		<Container>
			<Head>
				<title>{title}</title>
				<meta name="description" content={description} />
				<meta property="og:title" content={title} />
				<meta property="og:description" content={description} />
			</Head>
			<h1 className={styles.title}>
				Welcome to the{" "}
				<ExternalLink
					href="https://github.com/JosBroers/nextjs-starter-kit"
					title="Next.js starter kiton GitHub"
					className={styles["cta-link"]}
				>
					Next.js Starter Kit!
				</ExternalLink>
			</h1>
			<p className={styles.description}>
				Get started by editing <Code content="pages/index.js" />
			</p>
		</Container>
	)
}

export default Home
