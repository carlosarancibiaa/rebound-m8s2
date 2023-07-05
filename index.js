import app from './app/app.js';
import sequelize from './app/database/database.js'


const main = async()=>{
  try {
    await sequelize.authenticate();
    await sequelize.sync({ force: true, alter: true});
    let PORT = process.env.PORT || 3000;
    app.listen(PORT, ()=>{
      console.log(`Server is running on port ${PORT}`);
    })
  } catch (error) {
    console.log('Ha ocurrido un error: ' +error)
  }
};

main();