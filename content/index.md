---
navigation: false
layout: home
hero:
  title: "Scopri il gusto della dolcezza"
  description: "Un mondo di gusto a portata di click"
  cta: Scopri il catalogo
  img: /img/cupcake.jpg
---

::hero{:title=hero.title :description=hero.description :cta=hero.cta :img=hero.img}
::
:sticky-menu
:page-wrapper{fetch="home_page" :center=true container}
:page-wrapper{fetch="home/storia" bg="/img/wafer.jpeg" :center=true container}
::page-wrapper{fetch="home/dalla-puglia" container}
 ![Flour](/img/flour.png)
::
:skew-element{fetch="/home/esplosione-di-gusto" img="/img/cupcake2.jpg" }
:page-wrapper{fetch="home/marchi"}
:gallery-row{fetch="dolci-del-territorio" column="4" container}
:gallery-grid{fetch="dolci-del-territorio" column="4" container}

