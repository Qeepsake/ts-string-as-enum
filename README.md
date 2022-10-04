# Convert String to Enum with TypeScript

Tiny (zero dependencies) utility to Convert string to enum type with TypeScript ⚡️
## Install

```bash
npm install --save @qeepsake/ts-string-as-enum
```

## Usage

```ts
export declare enum Colors {
    /** JSDoc */
    Blue = "Blue",
    /** JSDoc */
    Red = "Red",
    /** JSDoc */
    Green = "Green",
}

tsStringAsEnum(Colors, 'blue'); // -> Colors.Blue
```

## License

MIT © [lukebrandonfarrell](https://github.com/lukebrandonfarrell)
## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="http://www.lukebrandonfarrell.com"><img src="https://avatars3.githubusercontent.com/u/18139277?v=4" width="100px;" alt=""/><br /><sub><b>Luke Brandon Farrell</b></sub></a><br /><a href="#projectManagement-lukebrandonfarrell" title="Project Management">📆</a> <a href="https://github.com/qeepsake/rails-guid/commits?author=lukebrandonfarrell" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!