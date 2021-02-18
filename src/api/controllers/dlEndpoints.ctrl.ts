import {Express, Request, Response} from "express";
import { getEndpoints } from "../lib/get-endpoints";

function dlEndpointsCtrl(req:Request, res: Response) {
  const endpoints = getEndpoints(<Express>req.app);
  const json = JSON.stringify(endpoints, null, 2);
  const filename = 'defapi-endpoints.json';

  res.setHeader('Content-Type', 'application/octet-stream');
  res.setHeader('Content-Disposition', `attachment; filename=${filename}`);
  res.send(Buffer.from(json));
}

export default dlEndpointsCtrl;