import { NextApiRequest, NextApiResponse } from "next";
import { graphql, buildSchema } from "graphql";

const buildedSchema = buildSchema(`
type Query{hello:String!}
schema {
  query: Query
}
`);
const resolver = {
  hello: async () => "World",
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  let query = req.body.query;
  try {
    const response = await graphql(buildedSchema, query, resolver);
    return res.json(response);
  } catch {
    console.log("exited");
    res.json({ error: "body malformed" });
  }
};
