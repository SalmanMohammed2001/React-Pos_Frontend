import DefaultCard from "../components/card/DefaultCard.tsx";
import MinQtyCard from "../components/card/MinQtyCard.tsx";
import DefaultChart from "../components/card/DefaultChart.tsx";

const homeData=[
    {
        thumbnail:'https://img.freepik.com/free-photo/medium-shot-people-shaking-hands_23-2149300663.jpg?w=740&t=st=1703137369~exp=1703137969~hmac=35986ede947cc3d1bd51ced58f37bc199ab223c93f17e0d2c2fdf356f075fe52',
        title:'Customer',
        description:'This is a wider card',
        value:2500,
        id:1
    },
    {
        thumbnail:'https://img.freepik.com/free-photo/large-warehouse-woman-white-protective-helmet-with-tablet-standing-large-industrial-warehouse-aisle-high-racks-goods_259150-56920.jpg?w=740&t=st=1703137426~exp=1703138026~hmac=ce592e2b7f33a81ce8dd5f50dd0c612bc7ce2788241e9ed84b5b86466b650e7d',
        title:'Product',
        description:'This is a wider card ',
        value:250,
        id:2
    },
    {
        thumbnail:'https://img.freepik.com/free-photo/black-friday-concept-with-products-shopping-cart_23-2147709351.jpg?size=626&ext=jpg&ga=GA1.2.1097798542.1703137309&semt=sph',
        title:'Orders',
        description:'This is a wider card',
        value:250,
        id:3
    },
    {
        thumbnail:'https://img.freepik.com/free-photo/person-carrying-lot-cash_53876-65367.jpg?w=740&t=st=1703137614~exp=1703138214~hmac=4fa5181e8c9443624820aa514432cd4446ba6ffd3e6e65184e0f1236fe8781b7',
        title:'Income',
        description:'This is a wider card',
        value:250,
        id:4
    }
]

function Home(){
    return(
        <div className="container pt-5">
            <div className="row">
                    {
                        homeData.map((value,index)=>{
                            return(
                                <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={index}>
                                <DefaultCard
                                     thumbnail={value.thumbnail}
                                    title={value.title}
                                    description={value.description}
                                    value={value.value}
                                />
                                </div>
                            )
                        })
                    }

                    <div className="row">
                   {    <div className="col-12 col-md-9">
                            <div className="context">
                                <DefaultChart/>
                            </div>
                        </div>}

                        <div className="col-12 col-md-3">
                            <MinQtyCard/>
                            <MinQtyCard/>
                            <MinQtyCard/>
                            <MinQtyCard/>
                        </div>



            </div>
        </div>
        </div>

    )
}

export default Home