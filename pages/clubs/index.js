import Head from 'next/head'
import Home from '../../components/Home/Home'
const Clubs=()=>{
    const clubsIndex= [0,1,2,3,4]
    const clubs = ["Metis","Digis","mean Mechanics","Odyssey","Torque"]
    const clubsDescripiton =["Coding Club, METIS at IITGN aims at spreading knowledge related to computer programming to the students and also develop websites and applications that cater to the needs of the institute. The club arranges weekly workshops focusing on basic programming and designing languages like JAVA and HTML. To inculcate a coding culture in the institute, Hackathon nights are conducted.",
                            "DigiS is the digital sports development club of IIT Gandhinagar. It acts as a platform for creative thinkers to turn their imaginations into reality. The club intends to take human-technology interaction to a whole new level. The club develops simulations, applications, augmented reality platforms for android and OS systems. It organizes regular events where students of the institute can participate",
                            'Believing in the philosophy of "Learning through Application", the mean Mechanics club plays a crucial role in inspiring and creating curiosity towards robotics and mechanics. It organizes workshops and competitions throughout the year focusing on different aspects of engineering and giving hands on experience to participants.',
                            'The universe is as vast as our imagination. The Odyssey club of IITGN attempts to foster the knowledge and participation of students of the institute in the field of astronomy. It encourages students across different disciplines and programmes to relive their passion to learn about the space and universe as a whole. The club provides students with technical learning and hands on experiences on astronomical equipments.',
                            "TORQUE, is the student-run Annual Magazine of IIT Gandhinagar. With a mission to feature, showcase and highlight the immensely talented community of the institute, TORQUE strives to provide a platform to exhibit and layout the year long activities conducted by the various clubs and independent projects undertaken by the students. TORQUE is an ode to their hard work, talent, creativity and out-of-the box thinking. Apart from this, the magazine also features one of the rarest of the rare species/combination found around the world - technocrats who are into creative writing and documentation! Apart from this, the magazine will also feature the campus vibes that appeal to the general audience as well!"
                            ]
    const clubsSecretary =[
        "","","","",""
    ]
    const clubsLogo =["","","","",""]
    const clubsLinks =["http://students.iitgn.ac.in/codingclub/?q=student/codingclub/",
    "","","",""
]

    return(<>
    <Head>
        <title>Clubs</title>
      </Head>
        <div>
            <Home/>
            {/* {clubsIndex.map((i)=>{
                return(<>
                <div>
                    <div>{clubs[i]}</div>
                    <div>{clubsDescripiton[i]}</div>
                    <div>{clubsSecretary[i]}</div>
                    <div>{clubsLogo[i]}</div>
                    <div>{clubsLinks[i]}</div>

                </div>
                </>)
            })} */}
            
        </div>
    </>)
}
export default Clubs