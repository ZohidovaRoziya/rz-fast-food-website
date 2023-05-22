export default function ({ redirect, $cookies }) {
  if (!$cookies.get('userInfo')) {
    return redirect('/')
  }
}
