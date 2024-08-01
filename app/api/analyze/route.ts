import { NextApiRequest, NextApiResponse } from 'next';

type GetResponseData = {
  message: string;
};

export async function GET(
  req: NextApiRequest,
  res: NextApiResponse<GetResponseData>
) {
  res.status(200).json({
    message: 'GET analyze',
  });
}
