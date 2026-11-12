
import Header from "./component/Header";
import Entry from "./component/Entry";
import mountFuji from "./component/images/mount fuji.jpg";
import opera from "./component/images/opera.jpeg";

import Geirangerfjord from "./component/images/Geirangerfjord.jpeg";

export default function App() {
    return (
        <>
            <Header />

            <Entry
                img={{
                    src: mountFuji,
                    alt: "Mount Fuji"
                }}
                title="Mount Fuji"
                country="Japan"
                googlemapslink="https://www.google.com/maps/place/Mount+Fuji/"
                dates="12 Jan, 2021 - 24 Jan, 2021"
                text="Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."
            />

                <Entry
    img={{
        src: opera,
        alt: "Sydney Opera House"
    }}
                 
                title="Sydney Opera House"
                country="Australia "
                googlemapslink="https://share.google/89pEzM5Kb3VQVvBPK"
                dates="15 Feb, 2022 - 24 Feb, 2022"
                text="The Sydney Opera House is a multi-venue performing arts centre in Sydney, New South Wales, Australia."
            />

            <Entry
                img={{
    src: Geirangerfjord,
    alt: "Geirangerfjord"
}}
                title="Geirangerfjord"
                country="Norway"
                googlemapslink="https://share.google/RdecaYOGzditU936g"
                dates="12 Mar, 2023 - 24 Mar, 2023"
                text="Geirangerfjorden or Geiranger Fjord is a fjord in the Sunnmøre region of Møre og Romsdal county, Norway. It is located entirely in Stranda Municipality. It is a 15-kilometre-long branch off the Sunnylvsfjorden, which itself is a branch off the Storfjorden"
            />


            
        </>
    );
}

