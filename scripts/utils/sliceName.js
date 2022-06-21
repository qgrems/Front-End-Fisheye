function slice_name(photographerName) {
  const first_name = photographerName
  const first_name_slice = first_name.split(' ').slice(0, 1)
  return first_name_slice
}
