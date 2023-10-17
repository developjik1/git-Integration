import { v4 as uuid} from 'uuid';

const uuidGener =  (req, res) => {
  res.statusCode = 200;
  res.json({ uuid: uuid() });
}

export default  uuidGener;