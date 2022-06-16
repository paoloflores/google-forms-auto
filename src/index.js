const puppeteer = require("puppeteer");
const yenv = require("yenv");
const env = yenv("env.yaml");
const districts = require("./utils/districts.js");
const selectors = require("./utils/selectors.js");

const randomSelector = (...variables) => {
  const item = variables[Math.floor(Math.random() * variables.length)];
  return item;
};

const getRandomDistrict = () => {
  const district = districts[Math.floor(Math.random() * districts.length)];
  console.log("Distrito", district);
  return district;
};

const getRandomAgeBetween = (min, max) => {
  const age = Math.floor(Math.random() * (max - min + 1)) + min;
  console.log("Edad", age);
  return age.toString();
};

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  // Pantalla 1: ¡Hola!
  await page.goto(env.URL);
  await page.click(selectors.pantalla1.clickSiguiente);
  await page.waitForNetworkIdle();
  // Pantalla 2: Ficha Sociodemográfica
  await page.click(
    randomSelector(selectors.pantalla2.masculino, selectors.pantalla2.femenino)
  );
  await page.type(selectors.pantalla2.edad, getRandomAgeBetween(25, 35));
  await page.type(selectors.pantalla2.distrito, getRandomDistrict());
  await page.click(selectors.pantalla2.clickSiguiente);
  await page.waitForNetworkIdle();
  // Pantalla 3: Consentimiento Informado
  await page.click(selectors.pantalla3.accedoAParticipar);
  await page.click(selectors.pantalla3.clickSiguiente);
  await page.waitForNetworkIdle();
  // Pantalla 4: Cuestionario de Estrés Laboral de la OIT-OMS
  await page.click(
    randomSelector(
      //selectors.pantalla4.pregunta1.o1,
      selectors.pantalla4.pregunta1.o2,
      selectors.pantalla4.pregunta1.o3,
      selectors.pantalla4.pregunta1.o4,
      selectors.pantalla4.pregunta1.o5,
      selectors.pantalla4.pregunta1.o6,
      selectors.pantalla4.pregunta1.o7
    )
  );
  await page.click(
    randomSelector(
      //selectors.pantalla4.pregunta2.o1,
      selectors.pantalla4.pregunta2.o2,
      selectors.pantalla4.pregunta2.o3,
      selectors.pantalla4.pregunta2.o4,
      selectors.pantalla4.pregunta2.o5,
      selectors.pantalla4.pregunta2.o6,
      selectors.pantalla4.pregunta2.o7
    )
  );
  await page.click(
    randomSelector(
      //selectors.pantalla4.pregunta3.o1,
      selectors.pantalla4.pregunta3.o2,
      selectors.pantalla4.pregunta3.o3,
      selectors.pantalla4.pregunta3.o4,
      selectors.pantalla4.pregunta3.o5,
      selectors.pantalla4.pregunta3.o6,
      selectors.pantalla4.pregunta3.o7
    )
  );
  await page.click(
    randomSelector(
      //selectors.pantalla4.pregunta4.o1,
      selectors.pantalla4.pregunta4.o2,
      selectors.pantalla4.pregunta4.o3,
      selectors.pantalla4.pregunta4.o4,
      selectors.pantalla4.pregunta4.o5,
      selectors.pantalla4.pregunta4.o6,
      selectors.pantalla4.pregunta4.o7
    )
  );
  await page.click(
    randomSelector(
      //selectors.pantalla4.pregunta5.o1,
      selectors.pantalla4.pregunta5.o2,
      selectors.pantalla4.pregunta5.o3,
      selectors.pantalla4.pregunta5.o4,
      selectors.pantalla4.pregunta5.o5,
      selectors.pantalla4.pregunta5.o6,
      selectors.pantalla4.pregunta5.o7
    )
  );
  await page.click(
    randomSelector(
      //selectors.pantalla4.pregunta6.o1,
      selectors.pantalla4.pregunta6.o2,
      selectors.pantalla4.pregunta6.o3,
      selectors.pantalla4.pregunta6.o4,
      selectors.pantalla4.pregunta6.o5,
      selectors.pantalla4.pregunta6.o6,
      selectors.pantalla4.pregunta6.o7
    )
  );
  await page.click(
    randomSelector(
      //selectors.pantalla4.pregunta7.o1,
      selectors.pantalla4.pregunta7.o2,
      selectors.pantalla4.pregunta7.o3,
      selectors.pantalla4.pregunta7.o4,
      selectors.pantalla4.pregunta7.o5,
      selectors.pantalla4.pregunta7.o6,
      selectors.pantalla4.pregunta7.o7
    )
  );
  await page.click(
    randomSelector(
      //selectors.pantalla4.pregunta8.o1,
      selectors.pantalla4.pregunta8.o2,
      selectors.pantalla4.pregunta8.o3,
      selectors.pantalla4.pregunta8.o4,
      selectors.pantalla4.pregunta8.o5,
      selectors.pantalla4.pregunta8.o6,
      selectors.pantalla4.pregunta8.o7
    )
  );
  await page.click(
    randomSelector(
      // selectors.pantalla4.pregunta9.o1,
      selectors.pantalla4.pregunta9.o2,
      selectors.pantalla4.pregunta9.o3,
      selectors.pantalla4.pregunta9.o4,
      selectors.pantalla4.pregunta9.o5,
      selectors.pantalla4.pregunta9.o6,
      selectors.pantalla4.pregunta9.o7
    )
  );
  await page.click(
    randomSelector(
      // selectors.pantalla4.pregunta10.o1,
      selectors.pantalla4.pregunta10.o2,
      selectors.pantalla4.pregunta10.o3,
      selectors.pantalla4.pregunta10.o4,
      selectors.pantalla4.pregunta10.o5,
      selectors.pantalla4.pregunta10.o6,
      selectors.pantalla4.pregunta10.o7
    )
  );
  await page.click(
    randomSelector(
      //  selectors.pantalla4.pregunta11.o1,
      selectors.pantalla4.pregunta11.o2,
      selectors.pantalla4.pregunta11.o3,
      selectors.pantalla4.pregunta11.o4,
      selectors.pantalla4.pregunta11.o5,
      selectors.pantalla4.pregunta11.o6,
      selectors.pantalla4.pregunta11.o7
    )
  );
  await page.click(
    randomSelector(
      //  selectors.pantalla4.pregunta12.o1,
      selectors.pantalla4.pregunta12.o2,
      selectors.pantalla4.pregunta12.o3,
      selectors.pantalla4.pregunta12.o4,
      selectors.pantalla4.pregunta12.o5,
      selectors.pantalla4.pregunta12.o6,
      selectors.pantalla4.pregunta12.o7
    )
  );
  await page.click(
    randomSelector(
      // selectors.pantalla4.pregunta13.o1,
      selectors.pantalla4.pregunta13.o2,
      selectors.pantalla4.pregunta13.o3,
      selectors.pantalla4.pregunta13.o4,
      selectors.pantalla4.pregunta13.o5,
      selectors.pantalla4.pregunta13.o6,
      selectors.pantalla4.pregunta13.o7
    )
  );
  await page.click(
    randomSelector(
      //  selectors.pantalla4.pregunta14.o1,
      selectors.pantalla4.pregunta14.o2,
      selectors.pantalla4.pregunta14.o3,
      selectors.pantalla4.pregunta14.o4,
      selectors.pantalla4.pregunta14.o5,
      selectors.pantalla4.pregunta14.o6,
      selectors.pantalla4.pregunta14.o7
    )
  );
  await page.click(
    randomSelector(
      // selectors.pantalla4.pregunta15.o1,
      selectors.pantalla4.pregunta15.o2,
      selectors.pantalla4.pregunta15.o3,
      selectors.pantalla4.pregunta15.o4,
      selectors.pantalla4.pregunta15.o5,
      selectors.pantalla4.pregunta15.o6,
      selectors.pantalla4.pregunta15.o7
    )
  );
  await page.click(
    randomSelector(
      // selectors.pantalla4.pregunta16.o1,
      selectors.pantalla4.pregunta16.o2,
      selectors.pantalla4.pregunta16.o3,
      selectors.pantalla4.pregunta16.o4,
      selectors.pantalla4.pregunta16.o5,
      selectors.pantalla4.pregunta16.o6,
      selectors.pantalla4.pregunta16.o7
    )
  );
  await page.click(
    randomSelector(
      // selectors.pantalla4.pregunta17.o1,
      selectors.pantalla4.pregunta17.o2,
      selectors.pantalla4.pregunta17.o3,
      selectors.pantalla4.pregunta17.o4,
      selectors.pantalla4.pregunta17.o5,
      selectors.pantalla4.pregunta17.o6,
      selectors.pantalla4.pregunta17.o7
    )
  );
  await page.click(
    randomSelector(
      //  selectors.pantalla4.pregunta18.o1,
      selectors.pantalla4.pregunta18.o2,
      selectors.pantalla4.pregunta18.o3,
      selectors.pantalla4.pregunta18.o4,
      selectors.pantalla4.pregunta18.o5,
      selectors.pantalla4.pregunta18.o6,
      selectors.pantalla4.pregunta18.o7
    )
  );
  await page.click(
    randomSelector(
      // selectors.pantalla4.pregunta19.o1,
      selectors.pantalla4.pregunta19.o2,
      selectors.pantalla4.pregunta19.o3,
      selectors.pantalla4.pregunta19.o4,
      selectors.pantalla4.pregunta19.o5,
      selectors.pantalla4.pregunta19.o6,
      selectors.pantalla4.pregunta19.o7
    )
  );
  await page.click(
    randomSelector(
      //  selectors.pantalla4.pregunta20.o1,
      selectors.pantalla4.pregunta20.o2,
      selectors.pantalla4.pregunta20.o3,
      selectors.pantalla4.pregunta20.o4,
      selectors.pantalla4.pregunta20.o5,
      selectors.pantalla4.pregunta20.o6,
      selectors.pantalla4.pregunta20.o7
    )
  );
  await page.click(
    randomSelector(
      // selectors.pantalla4.pregunta21.o1,
      selectors.pantalla4.pregunta21.o2,
      selectors.pantalla4.pregunta21.o3,
      selectors.pantalla4.pregunta21.o4,
      selectors.pantalla4.pregunta21.o5,
      selectors.pantalla4.pregunta21.o6,
      selectors.pantalla4.pregunta21.o7
    )
  );
  await page.click(
    randomSelector(
      //  selectors.pantalla4.pregunta22.o1,
      selectors.pantalla4.pregunta22.o2,
      selectors.pantalla4.pregunta22.o3,
      selectors.pantalla4.pregunta22.o4,
      selectors.pantalla4.pregunta22.o5,
      selectors.pantalla4.pregunta22.o6,
      selectors.pantalla4.pregunta22.o7
    )
  );
  await page.click(
    randomSelector(
      // selectors.pantalla4.pregunta23.o1,
      selectors.pantalla4.pregunta23.o2,
      selectors.pantalla4.pregunta23.o3,
      selectors.pantalla4.pregunta23.o4,
      selectors.pantalla4.pregunta23.o5,
      selectors.pantalla4.pregunta23.o6,
      selectors.pantalla4.pregunta23.o7
    )
  );
  await page.click(
    randomSelector(
      // selectors.pantalla4.pregunta24.o1,
      selectors.pantalla4.pregunta24.o2,
      selectors.pantalla4.pregunta24.o3,
      selectors.pantalla4.pregunta24.o4,
      selectors.pantalla4.pregunta24.o5,
      selectors.pantalla4.pregunta24.o6,
      selectors.pantalla4.pregunta24.o7
    )
  );
  await page.click(
    randomSelector(
      // selectors.pantalla4.pregunta25.o1,
      selectors.pantalla4.pregunta25.o2,
      selectors.pantalla4.pregunta25.o3,
      selectors.pantalla4.pregunta25.o4,
      selectors.pantalla4.pregunta25.o5,
      selectors.pantalla4.pregunta25.o6,
      selectors.pantalla4.pregunta25.o7
    )
  );
  await page.click(selectors.pantalla4.clickSiguiente);
  await page.waitForNetworkIdle();
  // Pantalla 5: Adaptación del inventario de afrontamiento COPE
  await page.click(
    randomSelector(
      selectors.pantalla5.pregunta1.o1,
      selectors.pantalla5.pregunta1.o2,
      selectors.pantalla5.pregunta1.o3,
      selectors.pantalla5.pregunta1.o4
    )
  );
  await page.click(
    randomSelector(
      selectors.pantalla5.pregunta2.o1,
      selectors.pantalla5.pregunta2.o2,
      selectors.pantalla5.pregunta2.o3,
      selectors.pantalla5.pregunta2.o4
    )
  );
  await page.click(
    randomSelector(
      selectors.pantalla5.pregunta3.o1,
      selectors.pantalla5.pregunta3.o2,
      selectors.pantalla5.pregunta3.o3,
      selectors.pantalla5.pregunta3.o4
    )
  );
  await page.click(
    randomSelector(
      selectors.pantalla5.pregunta4.o1,
      selectors.pantalla5.pregunta4.o2,
      selectors.pantalla5.pregunta4.o3,
      selectors.pantalla5.pregunta4.o4
    )
  );
  await page.click(
    randomSelector(
      selectors.pantalla5.pregunta5.o1,
      selectors.pantalla5.pregunta5.o2,
      selectors.pantalla5.pregunta5.o3,
      selectors.pantalla5.pregunta5.o4
    )
  );
  await page.click(
    randomSelector(
      selectors.pantalla5.pregunta6.o1,
      selectors.pantalla5.pregunta6.o2,
      selectors.pantalla5.pregunta6.o3,
      selectors.pantalla5.pregunta6.o4
    )
  );
  await page.click(
    randomSelector(
      selectors.pantalla5.pregunta7.o1,
      selectors.pantalla5.pregunta7.o2,
      selectors.pantalla5.pregunta7.o3,
      selectors.pantalla5.pregunta7.o4
    )
  );
  await page.click(
    randomSelector(
      selectors.pantalla5.pregunta8.o1,
      selectors.pantalla5.pregunta8.o2,
      selectors.pantalla5.pregunta8.o3,
      selectors.pantalla5.pregunta8.o4
    )
  );
  await page.click(
    randomSelector(
      selectors.pantalla5.pregunta9.o1,
      selectors.pantalla5.pregunta9.o2,
      selectors.pantalla5.pregunta9.o3,
      selectors.pantalla5.pregunta9.o4
    )
  );
  await page.click(
    randomSelector(
      selectors.pantalla5.pregunta10.o1,
      selectors.pantalla5.pregunta10.o2,
      selectors.pantalla5.pregunta10.o3,
      selectors.pantalla5.pregunta10.o4
    )
  );
  await page.click(
    randomSelector(
      selectors.pantalla5.pregunta11.o1,
      selectors.pantalla5.pregunta11.o2,
      selectors.pantalla5.pregunta11.o3,
      selectors.pantalla5.pregunta11.o4
    )
  );
  await page.click(
    randomSelector(
      selectors.pantalla5.pregunta12.o1,
      selectors.pantalla5.pregunta12.o2,
      selectors.pantalla5.pregunta12.o3,
      selectors.pantalla5.pregunta12.o4
    )
  );
  await page.click(
    randomSelector(
      selectors.pantalla5.pregunta13.o1,
      selectors.pantalla5.pregunta13.o2,
      selectors.pantalla5.pregunta13.o3,
      selectors.pantalla5.pregunta13.o4
    )
  );
  await page.click(
    randomSelector(
      selectors.pantalla5.pregunta14.o1,
      selectors.pantalla5.pregunta14.o2,
      selectors.pantalla5.pregunta14.o3,
      selectors.pantalla5.pregunta14.o4
    )
  );
  await page.click(
    randomSelector(
      selectors.pantalla5.pregunta15.o1,
      selectors.pantalla5.pregunta15.o2,
      selectors.pantalla5.pregunta15.o3,
      selectors.pantalla5.pregunta15.o4
    )
  );
  await page.click(
    randomSelector(
      selectors.pantalla5.pregunta16.o1,
      selectors.pantalla5.pregunta16.o2,
      selectors.pantalla5.pregunta16.o3,
      selectors.pantalla5.pregunta16.o4
    )
  );
  await page.click(
    randomSelector(
      selectors.pantalla5.pregunta17.o1,
      selectors.pantalla5.pregunta17.o2,
      selectors.pantalla5.pregunta17.o3,
      selectors.pantalla5.pregunta17.o4
    )
  );
  await page.click(
    randomSelector(
      selectors.pantalla5.pregunta18.o1,
      selectors.pantalla5.pregunta18.o2,
      selectors.pantalla5.pregunta18.o3,
      selectors.pantalla5.pregunta18.o4
    )
  );
  await page.click(
    randomSelector(
      selectors.pantalla5.pregunta19.o1,
      selectors.pantalla5.pregunta19.o2,
      selectors.pantalla5.pregunta19.o3,
      selectors.pantalla5.pregunta19.o4
    )
  );
  await page.click(
    randomSelector(
      selectors.pantalla5.pregunta20.o1,
      selectors.pantalla5.pregunta20.o2,
      selectors.pantalla5.pregunta20.o3,
      selectors.pantalla5.pregunta20.o4
    )
  );
  await page.click(
    randomSelector(
      selectors.pantalla5.pregunta21.o1,
      selectors.pantalla5.pregunta21.o2,
      selectors.pantalla5.pregunta21.o3,
      selectors.pantalla5.pregunta21.o4
    )
  );
  await page.click(
    randomSelector(
      selectors.pantalla5.pregunta22.o1,
      selectors.pantalla5.pregunta22.o2,
      selectors.pantalla5.pregunta22.o3,
      selectors.pantalla5.pregunta22.o4
    )
  );
  await page.click(
    randomSelector(
      selectors.pantalla5.pregunta23.o1,
      selectors.pantalla5.pregunta23.o2,
      selectors.pantalla5.pregunta23.o3,
      selectors.pantalla5.pregunta23.o4
    )
  );
  await page.click(
    randomSelector(
      selectors.pantalla5.pregunta24.o1,
      selectors.pantalla5.pregunta24.o2,
      selectors.pantalla5.pregunta24.o3,
      selectors.pantalla5.pregunta24.o4
    )
  );
  await page.click(
    randomSelector(
      selectors.pantalla5.pregunta25.o1,
      selectors.pantalla5.pregunta25.o2,
      selectors.pantalla5.pregunta25.o3,
      selectors.pantalla5.pregunta25.o4
    )
  );
  await page.click(
    randomSelector(
      selectors.pantalla5.pregunta26.o1,
      selectors.pantalla5.pregunta26.o2,
      selectors.pantalla5.pregunta26.o3,
      selectors.pantalla5.pregunta26.o4
    )
  );
  await page.click(
    randomSelector(
      selectors.pantalla5.pregunta27.o1,
      selectors.pantalla5.pregunta27.o2,
      selectors.pantalla5.pregunta27.o3,
      selectors.pantalla5.pregunta27.o4
    )
  );
  await page.click(
    randomSelector(
      selectors.pantalla5.pregunta28.o1,
      selectors.pantalla5.pregunta28.o2,
      selectors.pantalla5.pregunta28.o3,
      selectors.pantalla5.pregunta28.o4
    )
  );
  await page.click(
    randomSelector(
      selectors.pantalla5.pregunta29.o1,
      selectors.pantalla5.pregunta29.o2,
      selectors.pantalla5.pregunta29.o3,
      selectors.pantalla5.pregunta29.o4
    )
  );
  await page.click(
    randomSelector(
      selectors.pantalla5.pregunta30.o1,
      selectors.pantalla5.pregunta30.o2,
      selectors.pantalla5.pregunta30.o3,
      selectors.pantalla5.pregunta30.o4
    )
  );
  await page.click(
    randomSelector(
      selectors.pantalla5.pregunta31.o1,
      selectors.pantalla5.pregunta31.o2,
      selectors.pantalla5.pregunta31.o3,
      selectors.pantalla5.pregunta31.o4
    )
  );
  await page.click(
    randomSelector(
      selectors.pantalla5.pregunta32.o1,
      selectors.pantalla5.pregunta32.o2,
      selectors.pantalla5.pregunta32.o3,
      selectors.pantalla5.pregunta32.o4
    )
  );
  await page.click(
    randomSelector(
      selectors.pantalla5.pregunta33.o1,
      selectors.pantalla5.pregunta33.o2,
      selectors.pantalla5.pregunta33.o3,
      selectors.pantalla5.pregunta33.o4
    )
  );
  await page.click(
    randomSelector(
      selectors.pantalla5.pregunta34.o1,
      selectors.pantalla5.pregunta34.o2,
      selectors.pantalla5.pregunta34.o3,
      selectors.pantalla5.pregunta34.o4
    )
  );
  await page.click(
    randomSelector(
      selectors.pantalla5.pregunta35.o1,
      selectors.pantalla5.pregunta35.o2,
      selectors.pantalla5.pregunta35.o3,
      selectors.pantalla5.pregunta35.o4
    )
  );
  await page.click(
    randomSelector(
      selectors.pantalla5.pregunta36.o1,
      selectors.pantalla5.pregunta36.o2,
      selectors.pantalla5.pregunta36.o3,
      selectors.pantalla5.pregunta36.o4
    )
  );
  await page.click(
    randomSelector(
      selectors.pantalla5.pregunta37.o1,
      selectors.pantalla5.pregunta37.o2,
      selectors.pantalla5.pregunta37.o3,
      selectors.pantalla5.pregunta37.o4
    )
  );
  await page.click(
    randomSelector(
      selectors.pantalla5.pregunta38.o1,
      selectors.pantalla5.pregunta38.o2,
      selectors.pantalla5.pregunta38.o3,
      selectors.pantalla5.pregunta38.o4
    )
  );
  await page.click(
    randomSelector(
      selectors.pantalla5.pregunta39.o1,
      selectors.pantalla5.pregunta39.o2,
      selectors.pantalla5.pregunta39.o3,
      selectors.pantalla5.pregunta39.o4
    )
  );
  await page.click(
    randomSelector(
      selectors.pantalla5.pregunta40.o1,
      selectors.pantalla5.pregunta40.o2,
      selectors.pantalla5.pregunta40.o3,
      selectors.pantalla5.pregunta40.o4
    )
  );
  await page.click(
    randomSelector(
      selectors.pantalla5.pregunta41.o1,
      selectors.pantalla5.pregunta41.o2,
      selectors.pantalla5.pregunta41.o3,
      selectors.pantalla5.pregunta41.o4
    )
  );
  await page.screenshot({ path: "example.png" });
  await page.click(
    randomSelector(
      selectors.pantalla5.pregunta42.o1,
      selectors.pantalla5.pregunta42.o2,
      selectors.pantalla5.pregunta42.o3,
      selectors.pantalla5.pregunta42.o4
    )
  );
  await page.click(
    randomSelector(
      selectors.pantalla5.pregunta43.o1,
      selectors.pantalla5.pregunta43.o2,
      selectors.pantalla5.pregunta43.o3,
      selectors.pantalla5.pregunta43.o4
    )
  );
  await page.click(
    randomSelector(
      selectors.pantalla5.pregunta44.o1,
      selectors.pantalla5.pregunta44.o2,
      selectors.pantalla5.pregunta44.o3,
      selectors.pantalla5.pregunta44.o4
    )
  );
  await page.click(selectors.pantalla5.enviarForm);
  await page.waitForNetworkIdle();
  await page.screenshot({ path: "example.png" });
  await browser.close();
})();
