import db from '../database/database.js'

export const goHome = async (req, res)=>{
  try {
    res.render('home')
  } catch (error) {
    console.log('Error al cargar inicio', error)
  }
}