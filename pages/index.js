import React from "react";
import Head from "next/head";
import Nav from "../components/nav";
import { List, InputItem, Flex } from "antd-mobile";
import intl from "react-intl-universal";
import zh from "../locales/zh";

import "antd-mobile/dist/antd-mobile.min.css";

export default class extends React.Component {
  static async getInitialProps(context) {
    if (context.req) {
      intl.init({
        currentLocale: "zhCN",
        locales: {
          zhCN: zh
        },
        commonLocaleDataUrls: {
          en:
            "https://g.alicdn.com/react-intl-universal/locale-data/1.0.0/en.js",
          zhCN:
            "https://g.alicdn.com/react-intl-universal/locale-data/1.0.0/zh.js",
          zhTW:
            "https://g.alicdn.com/react-intl-universal/locale-data/1.0.0/zh.js"
        }
      });
    }

    return { a: 1 };
  }

  componentDidMount() {
    intl.init({
      currentLocale: "zhCN",
      locales: {
        zhCN: zh
      },
      commonLocaleDataUrls: {
        en: "https://g.alicdn.com/react-intl-universal/locale-data/1.0.0/en.js",
        zhCN:
          "https://g.alicdn.com/react-intl-universal/locale-data/1.0.0/zh.js",
        zhTW:
          "https://g.alicdn.com/react-intl-universal/locale-data/1.0.0/zh.js"
      }
    });
  }

  render() {
    // 服务器端输出翻译
    const description = intl.get("description");
    const name = intl.get("name");
    const email = intl.get("email");

    console.log(name, email, description);

    return (
      <div>
        <Head>
          <title>Home</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Nav />

        <div className="hero">
          <h1 className="title">Welcome to Next.js!</h1>
          <p className="description">
            To get started, edit <code>pages/index.js</code> and save to reload.
          </p>

          <div className="row">
            <a href="https://nextjs.org/docs" className="card">
              <h3>Documentation &rarr;</h3>
              <p>Learn more about Next.js in the documentation.</p>
            </a>
            <a href="https://nextjs.org/learn" className="card">
              <h3>Next.js Learn &rarr;</h3>
              <p>Learn about Next.js by following an interactive tutorial!</p>
            </a>
            <a
              href="https://github.com/zeit/next.js/tree/master/examples"
              className="card"
            >
              <h3>Examples &rarr;</h3>
              <p>Find other example boilerplates on the Next.js GitHub.</p>
            </a>
          </div>
        </div>

        <style jsx>{`
          .hero {
            width: 100%;
            color: #333;
          }
          .title {
            margin: 0;
            width: 100%;
            padding-top: 80px;
            line-height: 1.15;
            font-size: 48px;
          }
          .title,
          .description {
            text-align: center;
          }
          .row {
            max-width: 880px;
            margin: 80px auto 40px;
            display: flex;
            flex-direction: row;
            justify-content: space-around;
          }
          .card {
            padding: 18px 18px 24px;
            width: 220px;
            text-align: left;
            text-decoration: none;
            color: #434343;
            border: 1px solid #9b9b9b;
          }
          .card:hover {
            border-color: #067df7;
          }
          .card h3 {
            margin: 0;
            color: #067df7;
            font-size: 18px;
          }
          .card p {
            margin: 0;
            padding: 12px 0 0;
            font-size: 13px;
            color: #333;
          }
        `}</style>
        <div style={{ maxWidth: 500, margin: "0 auto" }}>
          <h3>1. 如果在header中使用翻译, am-list-body被am-list-header代替</h3>
          <List renderHeader={intl.get("description")} className="abc">
            <Flex>
              <InputItem>{intl.get("name")}</InputItem>
              <InputItem type="email">{intl.get("email")}</InputItem>
            </Flex>
          </List>
          <h3>2. 如果在Input中使用翻译, am-input-control没有添加至input的wrapper div上</h3>
          <List renderHeader="正常header" className="abc">
            <Flex>
              <InputItem>{intl.get("name")}</InputItem>
              <InputItem type="email">{intl.get("email")}</InputItem>
            </Flex>
          </List>
        </div>
      </div>
    );
  }
}
