import React, { Fragment } from "react";
import Link from "next/link";
import Head from "@/components/Head";
import "./index.less";
import { Button } from "antd";

import getConfig from "next-server/config";
const { linkPrefix } = getConfig().publicRuntimeConfig;

const Home = () => (
  <Fragment>
    <Head title={"next-ssr"} />
    <h1>欢迎来到next</h1>

    {/* Link内需要a标签，不然爬虫识别不了，不用a可以加passHref，提高爬虫识别率 */}

    <Link href="/userList" passHref as={`${linkPrefix}/userList`}>
      <Button type="primary">用户列表页</Button>
    </Link>
  </Fragment>
);
export default Home;
