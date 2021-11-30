import {Head, Html, Main, NextScript} from 'next/document'
import options from '@data/seo.json'

/**
 * A custom Document is commonly used to augment your application's `<html>` and `<body>` tags.
 * This is necessary because Next.js pages skip the definition of the surrounding document's markup.
 *
 * @constructor
 */
const Document = () => {
	return (
		<Html lang={options.inLanguage}>
			<Head />
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}

export default Document