import { useState, useEffect } from 'react';
import {  BarChart, Bar, PieChart, Pie, Sector, Cell, ResponsiveContainer, Legend , XAxis, Tooltip, Text} from 'recharts';
import Accordion from '../Components/Accordian';
import Image from 'next/image';

const COLORS = ['#A30000', '#ffc658', '#8884d8', '#EC7A08'];


interface GDMData {
  label: string;
  data: number;
  percentage: number;
}
interface GDMAge{
    label: string;
    percent: number;
    value : number;
}

const MythSection = () => {
  const [gdmData, setgdmData] = useState<GDMData[]>([]);
  const [gdmByAgeData, setGdmByAgeData] = useState<GDMAge[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/gdmData');
        const result = await res.json();

        setGdmByAgeData(result.gdmByAgeData);

        // Map the API result to the pieData format
        const pieData: GDMData[] = result.gdmData.map((item: any) => ({
          label: item.Sname, // Ensure this matches your database column name
          data: item.Number,             // Replace 'Number' with the correct field name for numeric values
          percentage: item.Percentage     // This is the percentage field
        }));

        // console.log(result);
        setgdmData(pieData);

        const ageData: GDMAge[] = result.gdmByAgeData.map((item:any) => ({
            label:item.Age_group,
            percent: item.percent,
        }));


      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array to ensure it runs only once on component mount

  // Updated MythData with different visuals
  const MythData = [
    { 
      id: 1,
      title: "Eating too much sugar causes GDM?",
      content: (
        <>
          Yes, diet matters, but GDM isn’t just about what you eat—it’s influenced by things like 
          <span className="text-purple-700"> genetics, age, and hormones</span>. 
          It’s a common myth that <span className="text-purple-700">eating sugar alone causes GDM</span>. 
          The real issue is more about <span className="text-purple-700">overall energy balance and weight regulation during pregnancy</span>, not specific foods. 
          So while it’s important to <span className="text-purple-700">watch your carbs</span>, they aren’t the 
          enemy—it’s about finding the right balance that works for you.
        </>
      ),
      image: "/sugar.svg",
      visual: <div className='max-w-[500px]'>
      <ResponsiveContainer width={250} height={250}>
    <BarChart width={500} height={350} data={gdmByAgeData} >
      <XAxis dataKey="Age_group" label={{ value: 'Age Group', position: 'insideBottom', offset:-1}} padding="gap"/>
      <Tooltip />
      <Bar dataKey="percent" fill='#A854F7' />
    </BarChart>
  </ResponsiveContainer>
      </div>
    },
    { 
      id: 2, 
      title: "I will need insulin to manage my gestational diabetes?",
      content: (
        <>
          Don’t worry, <span className="text-purple-700">most women with gestational diabetes don’t need insulin</span>. 
          The first step is usually <span className="text-purple-700">making small changes to your diet</span> and 
          <span className="text-purple-700"> getting some regular exercise</span>, which can often keep your blood sugar in check. 
          Your body is already <span className="text-purple-700">working hard to produce more insulin during pregnancy</span>, and these tweaks can help it do its job. 
          <span className="text-purple-700"> Insulin can be a great tool if needed</span>, but for most women, it’s not necessary—only about
          <span className="text-purple-700"> 10-20% actually end up needing it</span>.
        </>
      ),
      image: "/insulin.svg",
      visual: <PieChart width={250} height={250}>
      <Pie
        data={gdmData}
        cx={125}
        cy={125}
        startAngle={180}
        endAngle={0}
        innerRadius={60}
        outerRadius={80}
        // fill="#8884d8"
        paddingAngle={5}
        dataKey="percentage"  
        nameKey="label"       
        label    
        animationDuration={400}
        animationBegin={0}
      >
        {gdmData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Legend 
        verticalAlign="middle"
        height={30}
        layout='horizontal'   
        wrapperStyle={{ marginTop: '25px' }}   
        />
    </PieChart>
    },
    {
      id: 3,
      title: "All women with GDM will have big babies?",
      content: (
        <>
          Having a big baby is a concern with GDM, but it’s not a given. 
          The risk comes from <span className="text-purple-700">higher blood sugar levels passing from mom to baby</span>, 
          leading to extra fat storage in the baby. But the good news is, 
          by <span className="text-purple-700">keeping your blood sugar in check through diet and exercise</span>, 
          you can greatly lower the chances of having a large baby. It’s all about <span className="text-purple-700">managing those sugar levels</span>, 
          and with the right plan, <span className="text-purple-700">you can have a healthy pregnancy and baby</span>.
        </>
      ),
      image: "/bigbaby.svg",
      visual: <Image src="/bigbaby_visual.svg" width={100} height={100} alt="Big Baby Visual" />  // Different visual for big babies myth
    },
    {
      id: 4,
      title: "All women who develop GDM will have permanent diabetes following childbirth?",
      content: (
        <>
          The development of GDM during pregnancy is often resolved as 
          <span className="text-purple-700"> blood-glucose levels regulate</span> in the body, 
          providing <span className="text-purple-700">lower insulin resistance</span>, 
          and return glucose to normal levels. This can be <span className="text-purple-700">monitored in screening</span>. 
          It is not certain, if not likely, that the woman will have a <span className="text-purple-700">
          permanent diagnosis of diabetes</span>; although immediate management during GDM, 
          <span className="text-purple-700"> good diet, minimal excess weight</span>, 
          monitored signs of any health problems, <span className="text-purple-700">active lifestyle </span> 
          and detecting prediabetes if present, will <span className="text-purple-700">
          lower the associated risk with future Type-2 Diabetes diagnosis</span>.
        </>
      ),
      image: "/mother.svg",
      visual: <Image src='/sugar.svg' width={20} height={40} alt='sugar' /> // Using DonutChart here again
    }
  ];

  return (
    <div>
      {MythData.map((data) => (
        <Accordion 
          key={data.id} 
          title={data.title} 
          content={data.content} 
          img={data.image} 
          visual={data.visual}  // Pass the visual from MythData
          className="flex mx-auto w-[200px] sm:w-[500px] lg:w-[800px] justify-center items-center transition-transform hover:scale-105"
        />
      ))}
      
    </div>
  );
};

export default MythSection;
