import React from "react";
import Navigation from "../Components/Navbar";
import Return from "../Components/Return";
import { Link } from "react-router-dom";
import StackGrid, { transitions } from "react-stack-grid";

const Inspiration = () => {
  const { scaleDown } = transitions;
  return (
    <div>
      <Navigation />
      <Link to="/">
        <Return />
      </Link>
      <div>
        <StackGrid
          columnWidth={400}
          appear={scaleDown.appear}
          appeared={scaleDown.appeared}
          enter={scaleDown.enter}
          entered={scaleDown.entered}
          leaved={scaleDown.leaved}
        >
          <div key="key1" id="zoomIn">
            {" "}
            <img
              className="object-cover rounded-3xl overflow-hidden"
              src="https://i.pinimg.com/564x/0f/a5/d0/0fa5d0f5b41a4274bdc3a4ebf9962412.jpg"
            />
          </div>
          <div key="key2" id="zoomIn">
            {" "}
            <img
              className="object-cover rounded-3xl overflow-hidden"
              src="https://i.pinimg.com/564x/ce/f7/8c/cef78cd873a128825762568945a6b066.jpg"
            />
          </div>
          <div key="key3" id="zoomIn">
            {" "}
            <img
              className="object-cover rounded-3xl overflow-hidden"
              src="https://i.pinimg.com/564x/76/4f/d8/764fd875f53b0cc4138173887ce91cb6.jpg"
            />
          </div>
          <div key="key4" id="zoomIn">
            {" "}
            <img
              className="object-cover rounded-3xl overflow-hidden"
              src="https://i.pinimg.com/564x/21/4d/54/214d54a93915902494b9a6e4402ca9f8.jpg"
            />
          </div>
          <div key="key5" id="zoomIn">
            {" "}
            <img
              className="object-cover rounded-3xl overflow-hidden"
              src="https://www.vitahabitat.fr/115748-thickbox_default/ensemble-meuble-salle-de-bain-vasque-miroir-noir-mat-optimus-87825-salgar.jpg"
            />
          </div>
          <div key="key6" id="zoomIn">
            {" "}
            <img
              className="object-cover rounded-3xl overflow-hidden"
              src="https://www.batinea.com/media//salle-de-bain-campagne.jpg"
            />
          </div>
          <div key="key7" id="zoomIn">
            {" "}
            <img
              className="object-cover rounded-3xl overflow-hidden"
              src="https://cdn-elle.ladmedia.fr/var/plain_site/storage/images/deco/pieces/salle-de-bain/40-idees-deco-pour-la-salle-de-bains/70300606-15-fre-FR/Idees-deco-salle-de-bain-l-art-de-rafraichir-cette-piece-avec-trois-fois-rien.jpg"
            />
          </div>
          <div key="key8" id="zoomIn">
            {" "}
            <img
              className="object-cover rounded-3xl overflow-hidden"
              src="https://static.cotemaison.fr/medias_11953/w_1150,h_1150,c_crop,x_437,y_0/w_600,h_600,c_fill,g_north/v1601656654/une-salle-de-bains-esprit-spa_6120386.jpeg"
            />
          </div>
          <div key="key9" id="zoomIn">
            {" "}
            <img
              className="object-cover rounded-3xl overflow-hidden"
              src="https://i.pinimg.com/564x/0f/a5/d0/0fa5d0f5b41a4274bdc3a4ebf9962412.jpg"
            />
          </div>
        </StackGrid>
        {/* <section className="py-48 bg-white flex flex-col justify-center">
          <div className="grid grid-cols-2 gap-10 max-w-6xl mx-auto">
            <div
              className="-mt-20 flex justify-end overflow-hidden"
              id="zoomIn"
            >
              <img
                className="w-2/3 h-2/3 object-cover rounded-lg overflow-hidden"
                src="https://i.pinimg.com/564x/58/a9/bc/58a9bc826c9a00733bda1649398585d7.jpg"
              />
            </div>
            <div className="flex justify-start overflow-hidden" id="zoomIn">
              <img
                className="rounded-lg object-cover overflow-hidden"
                src="https://i.pinimg.com/736x/29/8b/f8/298bf8e233180bb5fd1072b5fac6b818.jpg"
              />
            </div>

            <div
              className="-mt-64 flex justify-start overflow-hidden"
              id="zoomIn"
            >
              <img
                className="rounded-lg object-cover overflow-hidden"
                src="https://i.pinimg.com/564x/b7/5a/27/b75a27243732cda553fde740a82965c4.jpg"
              />
            </div>

            <div
              className="flex justify-start -mr-28 ml-28 overflow-hidden"
              id="zoomIn"
            >
              <img
                className="w-2/3 h-2/3 object-cover rounded-lg overflow-hidden"
                src="https://i.pinimg.com/736x/0c/a6/db/0ca6db6721c07ce0af4d2cd335265f2a.jpg"
              />
            </div>
          </div>
        </section>
      </div> */}
      </div>
    </div>
  );
};

export default Inspiration;
