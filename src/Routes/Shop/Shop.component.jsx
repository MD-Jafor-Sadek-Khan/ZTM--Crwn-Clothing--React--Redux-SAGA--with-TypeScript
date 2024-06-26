import CategoriesPreview from "../../Components/Categories-Preview/CategoriesPreview.component"

import { Route, Routes } from "react-router-dom"
import Category from "../../Components/Category/Category.component"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { fetchCategoriesStart } from "../../Store/categories/category.actions"
import Space from "../../Components/Space/Space.component"

const Shop = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCategoriesStart())
  }, [])

  return (
    <Routes>
      <Route index element={<><Space/><CategoriesPreview /></>} />
      <Route path=":category" element={<Category />} />
    </Routes>
  )
}

export default Shop
