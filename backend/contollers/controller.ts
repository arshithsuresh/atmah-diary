import { Request, Response } from "express";

const method1 = (req: Request, res: Response) => {
  res.send("Hello, Welcome to our Page");
};

const method2 = (req: Request, res: Response) => {
  res.send("Hello, This was a post Request");
};

export { method1, method2 };
