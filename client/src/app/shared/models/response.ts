export interface Response {
  sucess?: boolean;
  error?: boolean;
  data: { [key: string]: any };
}
