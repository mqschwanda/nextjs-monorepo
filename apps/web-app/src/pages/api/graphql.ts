import { server } from '@mqs/graphql-server';
import type { NextApiRequest, NextApiResponse } from 'next';

const start = server.start();

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handleGraphQl(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader(
    'Access-Control-Allow-Origin',
    'https://studio.apollographql.com'
  );
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Vary'
  );
  if (req.method === 'OPTIONS') {
    res.end();
    return false;
  }

  await start;
  await server.createHandler({
    path: '/api/graphql',
  })(req, res);
}
