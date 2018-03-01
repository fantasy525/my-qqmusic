import Originjsonp from 'jsonp'
export default function jsonp(url, data) {
  let newUrl = ''
  const commonParams={
    g_tk: 5381,
    loginUin: 0,
    hostUin: 0,
    format: "jsonp",
    inCharset: "utf-8",
    outCharset: "utf-8",
    notice: 0,
    platform: "h5page",
    needNewCode: 0
  }
  data=Object.assign({},data,commonParams)
  newUrl = url + '?' + Object.keys(data).map(function (k) {
    return `${k}=${data[k]}`
  }).join('&')
  return new Promise((resolve,reject)=>{
    Originjsonp(newUrl,{param:'jsonpCallback'}, (err, res) => {
      if (err) {
        reject(err)
      } else {
        resolve(res)
      }
    })
  })
}
