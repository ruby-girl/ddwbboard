export default function MapLoader () {
    return new Promise((resolve, reject) => {
      if (window.AMap) {
        resolve(window.AMap)
      } else {
        var script = document.createElement('script')
        script.type = 'text/javascript'
        script.async = true
        script.src =
          'https://webapi.amap.com/maps?v=1.4.14&callback=initAMap&key=b37218900009b3618f05afc6210f4dca'
        script.onerror = reject
        document.head.appendChild(script)
      }
      window.initAMap = () => {
        resolve(window.AMap)
      }
    })
}
export const gcj02Towgs84 = (lng, lat) => {
  const PI = 3.14159265358979324
  const x_pi = PI * 3000.0 / 180.0
  const a = 6378245.0 //  a: 卫星椭球坐标投影到平面地图坐标系的投影因子。
  const ee = 0.00669342162296594323 //  ee: 椭球的偏心率。
  var lat = +lat
  var lng = +lng
  let dlat = transformLat(lng - 105.0, lat - 35.0)
  let dlng = transformLon(lng - 105.0, lat - 35.0)
  const radlat = lat / 180.0 * PI
  let magic = Math.sin(radlat)
  magic = 1 - ee * magic * magic
  const sqrtmagic = Math.sqrt(magic)
  dlat = (dlat * 180.0) / ((a * (1 - ee)) / (magic * sqrtmagic) * PI)
  dlng = (dlng * 180.0) / (a / sqrtmagic * Math.cos(radlat) * PI)
  const mglat = lat + dlat
  const mglng = lng + dlng
  function transformLat (x, y) {
    const PI = 3.14159265358979324
    const x_pi = PI * 3000.0 / 180.0
    let ret = -100.0 + 2.0 * x + 3.0 * y + 0.2 * y * y + 0.1 * x * y + 0.2 * Math.sqrt(Math.abs(x))
    ret += (20.0 * Math.sin(6.0 * x * PI) + 20.0 * Math.sin(2.0 * x * PI)) * 2.0 / 3.0
    ret += (20.0 * Math.sin(y * PI) + 40.0 * Math.sin(y / 3.0 * PI)) * 2.0 / 3.0
    ret += (160.0 * Math.sin(y / 12.0 * PI) + 320 * Math.sin(y * PI / 30.0)) * 2.0 / 3.0
    return ret
  }
  function transformLon (x, y) {
    const PI = 3.14159265358979324
    const x_pi = PI * 3000.0 / 180.0
    let ret = 300.0 + x + 2.0 * y + 0.1 * x * x + 0.1 * x * y + 0.1 * Math.sqrt(Math.abs(x))
    ret += (20.0 * Math.sin(6.0 * x * PI) + 20.0 * Math.sin(2.0 * x * PI)) * 2.0 / 3.0
    ret += (20.0 * Math.sin(x * PI) + 40.0 * Math.sin(x / 3.0 * PI)) * 2.0 / 3.0
    ret += (150.0 * Math.sin(x / 12.0 * PI) + 300.0 * Math.sin(x / 30.0 * PI)) * 2.0 / 3.0
    return ret
  }
  return [lng * 2 - mglng, lat * 2 - mglat]
}