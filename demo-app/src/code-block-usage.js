import { customElement, LitElement, html } from 'lit-element';
import { LitDocsStyle } from '@app/helpers/index';
import '@app/helpers/index';


@customElement('code-block-usage')
export class CodeBlockUsage extends LitDocsStyle(LitElement) {

    render() {

        return html`

            <h1>Code block</h1>

            <p>
                Use code blocks to demonstrate code. When using
                <a href="lit-state-style">LitStateStyle</a>, the default
                <code>&lt;code&gt;</code> blocks are styled and are good for
                tiny code snippets. For bigger code blocks, use
                <code>&lt;lit-docs-code-block&gt;</code>.
            </p>

            <h3>Example:</h3>

            <p>
                <lit-docs-code-block .code=${this.bigCodeDemo}></lit-docs-lit-docs-code-block>
            </p>

            <h3>Usage:</h3>

            <p>
                <lit-docs-code-block .code=${this.bigCodeDemoSource}></lit-docs-code-block>
            </p>

            <h2>Code block with filename</h2>

            <h3>Example:</h3>

            <p>
                <lit-docs-code-block filename='my-function.js' .code=${this.bigCodeDemo}></lit-docs-code-block>
            </p>

            <h3>Usage:</h3>

            <p>
                <lit-docs-code-block .code=${this.bigCodeWithFilenameDemoSource}></lit-docs-code-block>
            </p>

        `;

    }

    get bigCodeDemo() {
        return `function() {
    console.log('hello!');
}`;
    }

    get bigCodeDemoSource() {
        return `import { html } from 'lit-element';
import 'lit-element-demo-app-helpers';

const code = \`function() {
    console.log('hello!');
}\`;

html\`<lit-docs-code-block .code=\${code}></lit-docs-code-block>\`;`;
    }

    get bigCodeWithFilenameDemoSource() {

        return `import { html } from 'lit-element';
import 'lit-element-demo-app-helpers';

const code = \`function() {
    console.log('hello!');
}\`;

html\`<lit-docs-code-block filename='my-function.js' .code=\${code}></lit-docs-code-block>\`;`;

    }

}
