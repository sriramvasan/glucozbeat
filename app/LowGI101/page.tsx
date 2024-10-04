import { Admonishment } from "../Components/Admonishment";
import { Toc, TocItem } from "../Components/Toc";
import styles from "./page.module.css";
import clsx from "clsx";
import LowGIBodyImg from "./assets/lowgi-body.png";
import Image from "next/image";
import {
    DownloadableResource,
    DownloadableResourceProps,
} from "../Components/DownloadableResource";
import DR4Img1 from "./assets/downloadable-resources/cover4_GIF_Consumer_FactSheet_LowGIMealPlanning_210524.jpg";
import DR3Img from "./assets/downloadable-resources/GIF_Consumer_FactSheet_Pregnancy_210524.jpg";
import DR1Img from "./assets/downloadable-resources/quick-guide-glycemic-index.jpg";
import DR2Img from "./assets/downloadable-resources/Baker-Institute-factsheet-carbohydrates-and-glycaemic-index.jpg";
import { ExpandableSection } from "../Components/ExpandableSection";
import Link from 'next/link';


export default function LowGIPage() {
    const tocItems: TocItem[] = [
        {
            title: "What is the Glycemic Index?",
            href: "#what-is-the-glycemic-index-gi",
        },
        {
            title: "Watch and Learn",
            href: "#watch-and-learn-understanding-the-glycemic-index",
        },
        {
            title: "Why Low-GI?",
            href: "#why-choose-low-gi-foods-",
        },
        {
            title: "Mastering Low-GI Eating",
            href: "#how-to-follow",
        },
        {
            title: "Additional Resources",
            href: "#downloadable-resources-guides-for-better-health",
        },
    ];

    const downloadableResources: DownloadableResourceProps[] = [
        {
            title: "The Glycemic Index: A Quick Guide",
            description:
                "A fast, fun rundown on the glycemic index and how to pick low-GI foods for better blood sugar",
            cover: DR1Img,
            downloadUrl:
                "https://www.ndss.com.au/wp-content/uploads/quick-guide-glycemic-index.pdf",
        },
        {
            title: "Carbohydrates and Glycemic Index",
            description:
                "A simple, no-nonsense guide on how carbs and GI work together—and how to manage them like a pro",
            cover: DR2Img,
            downloadUrl:
                "https://baker.edu.au/-/media/documents/fact-sheets/baker-institute-factsheet-carbohydrates-and-glycaemic-index.pdf",
        },
        {
            title: "Your Guide to Eating Well During Pregnancy",
            description:
                "Easy tips for a balanced, low-GI diet to keep you and baby healthy and happy during pregnancy",
            cover: DR3Img,
            downloadUrl:
                "https://www.gisymbol.com/wp-content/uploads/2024/05/GIF_Consumer_FactSheet_Pregnancy_210524.pdf",
        },
        {
            title: "Low GI Meal Planning: Getting the Balance Right",
            description:
                "Discover how to build delicious, low-GI meals that keep your energy steady and your taste buds happy",
            cover: DR4Img1,
            downloadUrl:
                "https://www.gisymbol.com/wp-content/uploads/2024/05/GIF_Consumer_FactSheet_LowGIMealPlanning_210524.pdf",
        },
    ];

    return (
        <div className="w-[90%] max-w-[1280px] mx-auto pt-8 lg:pt-12 pb-56">
            <h1 className="text-4xl font-bold my-4">
                Low-GI 101: Eating Smart, Living Better
            </h1>
            <p className="text-xl my-4">
                Everything You Need to Know About the Glycemic Index and How to Apply It
                in Your Daily Life
            </p>

            <div className="flex flex-col lg:flex-row gap-[10%]">
                <Toc
                    className="flex-none mt-12 hidden lg:block"
                    top={64}
                    items={tocItems}
                ></Toc>
                <div className="w-full lg:hidden pl-6 my-6">
                    <Toc items={tocItems}></Toc>
                </div>

                <div className={clsx(styles["markdown-body"], "flex-1")}>
                    <div className="">
                        <video autoPlay muted loop src="/lowgi-banner.mp4"></video>
                    </div>

                    <h3 id="what-is-the-glycemic-index-gi">
                        What is the Glycemic Index (GI)?
                    </h3>
                    <p>
                        The <span className="text-purple-700"> Glycemic Index (GI)</span>  is a
                        system that rates carbohydrate-containing foods by how much they
                        raise blood glucose levels compared to a standard food.
                    </p>
                    <p>The GI scale runs from 0 to 100:</p>
                    <ul>
                        <li>
                            <p>
                                <strong>Low GI (55 or less)</strong>: These foods are slowly
                                digested and absorbed, causing a slower and smaller rise in
                                blood sugar levels.
                            </p>
                        </li>
                        <li>
                            <p>
                                <strong>Medium GI (56 to 69)</strong>: These foods cause a
                                moderate increase in blood sugar levels.
                            </p>
                        </li>
                        <li>
                            <p>
                                <strong>High GI (70 or above)</strong>: These foods cause a
                                quicker and higher spike in blood sugar levels.
                            </p>
                        </li>
                    </ul>
                    <p>
                        Foods <span className="text-purple-700">high in refined carbs and sugar </span>
                        are digested more quickly and
                        often have a high GI, while foods high in protein, fat, or fibre
                        typically have a low GI. Foods that contain no carbs are not
                        assigned a GI and include meat, fish, poultry, nuts, seeds, herbs,
                        spices, and oils.
                    </p>
                    <p>
                        Low GI foods are beneficial as they help manage blood glucose
                        levels, reduce cholesterol, and keep you feeling full longer. They
                        are particularly crucial for managing conditions like <span className="text-purple-700">
                            gestational diabetes mellitus (GDM) </span> .
                    </p>

                    <Admonishment>
                        <p>
                            The <span className="text-purple-700">glycemic index (GI) </span>
                            is a way to see how much a certain food
                            can raise your blood sugar. Foods with a <span className="text-purple-700">higher GI number make
                            your blood sugar rise more quickly</span>, while foods with a lower GI
                            have a smaller, slower effect.
                        </p>
                    </Admonishment>

                    <hr />
                    <h3 id="watch-and-learn-understanding-the-glycemic-index">
                        Watch and Learn: Understanding the Glycemic Index
                    </h3>
                    <p>
                        Discover more about low-GI foods through this informative video,
                        which explains the basics of the glycemic index and how different
                        foods can affect your blood sugar levels.
                    </p>
                    <p>
                        <iframe
                            className="w-full max-w-[700px] aspect-video"
                            src="https://www.youtube.com/embed/v1zCVE3ifn0"
                            title=""
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                    </p>
                    <p>
                        <strong>Key Takeaways from the Video:</strong>
                    </p>
                    <ul>
                        <li>
                            <p>Explanation of low, medium, and high GI foods.</p>
                        </li>
                        <li>
                            <p>Tips on how to manage and balance your meals using the GI.</p>
                        </li>
                        <li>
                            <p>The impact of GI on your body and long-term health.</p>
                        </li>
                    </ul>
                    <hr />
                    <h3 id="why-choose-low-gi-foods-">Why Choose Low-GI Foods?</h3>
                    <p>
                        Choosing low-GI foods can have several benefits, especially for
                        managing health and energy levels:
                    </p>
                    <ul>
                        <li>
                            <p>
                                <strong>Better Blood Sugar Control</strong>: Low-GI foods help
                                stabilize blood glucose levels by preventing rapid spikes, which
                                is crucial for managing GDM effectively.
                            </p>
                        </li>
                        <li>
                            <p>
                                <strong>Sustained Energy</strong>: These foods provide a slower,
                                more consistent source of energy, helping you stay active and
                                energized throughout the day.
                            </p>
                        </li>
                        <li>
                            <p>
                                <strong>Reduced Risk of Health Complications</strong>:
                                Consistently opting for low-GI foods can lessen the risk of
                                developing type 2 diabetes after pregnancy and help with weight
                                management.
                            </p>
                        </li>
                    </ul>
                    <div className="flex flex-col lg:flex-row bg-gray-100 px-4 lg:px-6">
                        <p className="flex-[1] pt-2 lg:pt-8 pl-4 text-sm">
                            Science shows that a low GI diet helps <span className="text-purple-700">manage weight and reduces
                                the risk of developing significant health problems</span> including type
                            2 diabetes, heart disease and some cancers.
                        </p>
                        <div className="flex-[3]">
                            <Image
                                className="w-full"
                                src={LowGIBodyImg.src}
                                width={LowGIBodyImg.width}
                                height={LowGIBodyImg.height}
                                alt="body"
                            />
                        </div>
                    </div>
                    <h3 id="how-to-follow">Mastering Low-GI Eating</h3>
                    <p>
                        Even though a food is labeled low-GI, it&#39;s important to consider
                        its overall nutritional profile. For instance, some low-GI foods may
                        be high in fats or sugars. Here are some tips to incorporate low-GI
                        foods into your diet healthily:
                    </p>
                    <ul>
                        <li>
                            <p>
                                <strong>Pair Carbohydrates with Proteins or Fats</strong>:
                                Combining foods can often help lower the overall GI of a meal.
                                For example, add nuts or yogurt to your diet to balance the GI.
                            </p>
                        </li>
                        <li>
                            <p>
                                <strong>Choose Whole and Less Processed Foods</strong>: Whole
                                grains like brown rice or whole wheat roti have a lower GI than
                                their processed counterparts.
                            </p>
                        </li>
                        <li>
                            <p>
                                <strong>Be Mindful of Ripeness and Preparation</strong>: The GI
                                of fruits and vegetables can change based on ripeness and how
                                they are cooked. Less ripe and less processed usually means a
                                lower GI.
                            </p>
                        </li>
                        <li>
                            <p>
                                <strong>Control Portions</strong>: Even low-GI foods can impact
                                your blood sugar if eaten in large quantities. Watch your
                                portion sizes to keep your blood glucose levels in check.
                            </p>
                        </li>
                    </ul>
                    <p>
                        For a more personalized approach, use our{" "}
                        <Link href="/SnapGI" className="text-blue-500 underline">
                            Snap GI
                        </Link> feature to
                        quickly check a food's glycemic index with a photo. Explore our{" "}
                        <Link href="giFoods" className="text-blue-500 underline">
                            Food Flip
                        </Link>
                        {" "}function to effortlessly search for healthier, low-GI food alternatives and transform your meals for better health.
                    </p>

                    <Admonishment>
                        <p>
                            Following a low glycemic diet involves swapping out foods that
                            have a high GI with low GI alternatives. <span className="text-purple-700">(*Hint: check out the amazing tools in our nav bar to help with this!)</span>  Incorporate these
                            commonly found South Asian foods into your diet for a balanced,
                            low-GI meal plan:
                        </p>

                        <ul>
                            <li>
                                <p>
                                    <strong>Grains</strong>: Basmati rice, brown rice, whole wheat
                                    roti.
                                </p>
                            </li>
                            <li>
                                <p>
                                    <strong>Legumes</strong>: Lentils, chickpeas, and beans like
                                    dal.
                                </p>
                            </li>
                            <li>
                                <p>
                                    <strong>Vegetables</strong>: Spinach, kale, and other leafy
                                    greens.
                                </p>
                            </li>
                            <li>
                                <p>
                                    <strong>Fruits</strong>: Apples, pears, and oranges.
                                </p>
                            </li>
                        </ul>
                    </Admonishment>

                    <hr />
                    <h3 id="downloadable-resources-guides-for-better-health">
                        Additional Resources: Guides for Better Health
                    </h3>
                    <p>
                        Looking for some expert advice to guide you on your journey? We’ve
                        gathered a handful of handy resources from trusted associations.
                        These PDFs are packed with simple tips on <span className="text-purple-700">
                        low-GI eating, meal
                        planning, and how to maintain a healthy diet during
                        pregnancy — especially when managing gestational diabetes.
                            </span>
                    </p>
                    <p>
                        Download them and use them whenever you need a quick reference to
                        stay on track with your health goals!
                    </p>
                    <div className="grid grid-cols-2 grid-rows-2 xl:grid-cols-4 xl:grid-rows-1 gap-6">
                        {downloadableResources.map(prop => (
                            <DownloadableResource
                                {...prop}
                                key={prop.downloadUrl}
                            ></DownloadableResource>
                        ))}
                    </div>

                    <div className="mt-8">
                        <ExpandableSection>
                            <ul>
                                <li>
                                    <p>
                                        Augustin, L. S. A., Kendall, C. W. C., Jenkins, D. J. A.,
                                        Willett, W. C., Astrup, A., Barclay, A. W., ... &amp; Poli,
                                        A. (2015). Glycemic index, glycemic load and cancer risk: A
                                        meta-analysis.{" "}
                                        <em>
                                            Nutrition, Metabolism &amp; Cardiovascular Diseases, 25
                                        </em>
                                        (6), 540-546.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Brand-Miller, J., Hayne, S., Petocz, P., &amp; Colagiuri, S.
                                        (2003). Low–glycemic index diets in the management of
                                        diabetes: A meta-analysis of randomized controlled trials.{" "}
                                        <em>Diabetes Care, 26</em>(8), 2261-2267.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Diabetes Australia. (n.d.). Are low-GI and low-carb the
                                        same? Retrieved from{" "}
                                        <a href="https://www.diabetesaustralia.com.au/blog/are-low-gi-and-low-carb-the-same/"></a>
                                        <a href="https://www.diabetesaustralia.com.au/blog/are-low-gi-and-low-carb-the-same/">
                                            https://www.diabetesaustralia.com.au/blog/are-low-gi-and-low-carb-the-same/
                                        </a>
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Diabetes Australia. (n.d.). Carbohydrates, protein and fats.
                                        Retrieved from{" "}
                                        <a href="https://www.diabetesaustralia.com.au/living-with-diabetes/carbs-protein-fats/"></a>
                                        <a href="https://www.diabetesaustralia.com.au/living-with-diabetes/carbs-protein-fats/">
                                            https://www.diabetesaustralia.com.au/living-with-diabetes/carbs-protein-fats/
                                        </a>
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Diabetes UK. (n.d.). Glycaemic index and diabetes. Retrieved
                                        from{" "}
                                        <a href="https://www.diabetes.org.uk/guide-to-diabetes/enjoy-food/carbohydrates-and-diabetes/glycaemic-index-and-diabetes"></a>
                                        <a href="https://www.diabetes.org.uk/guide-to-diabetes/enjoy-food/carbohydrates-and-diabetes/glycaemic-index-and-diabetes">
                                            https://www.diabetes.org.uk/guide-to-diabetes/enjoy-food/carbohydrates-and-diabetes/glycaemic-index-and-diabetes
                                        </a>
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Dodd, J. M., Grivell, R. M., Crowther, C. A., &amp;
                                        Robinson, J. S. (2007). Health outcomes of a high–glycemic
                                        index diet versus a low–glycemic index diet in pregnant
                                        women: An observational study. <em>The Lancet, 369</em>
                                        (9578), 2061-2068.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        HealthDirect. (n.d.). Glycaemic Index (GI). Retrieved from{" "}
                                        <a href="https://www.healthdirect.gov.au/glycaemic-index-gi"></a>
                                        <a href="https://www.healthdirect.gov.au/glycaemic-index-gi">
                                            https://www.healthdirect.gov.au/glycaemic-index-gi
                                        </a>
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Jenkins, D. J. A., Wolever, T. M. S., Taylor, R. H., Barker,
                                        H., Fielden, H., Baldwin, J. M., ... &amp; Goff, D. V.
                                        (1981). Glycemic index of foods: A physiological basis for
                                        carbohydrate exchange.{" "}
                                        <em>American Journal of Clinical Nutrition, 34</em>
                                        (3), 362-366.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Marsh, K., Steinbeck, K. S., Atkinson, F. S., Petocz, P.,
                                        &amp; Brand-Miller, J. C. (2010). Effect of a low glycemic
                                        index compared with a conventional healthy diet on
                                        polycystic ovary syndrome.{" "}
                                        <em>The American Journal of Clinical Nutrition, 92</em>(1),
                                        83-92.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Mayo Clinic Staff. (2017). Low-glycemic index diet: A
                                        helpful tool for diabetes. Retrieved from{" "}
                                        <a href="https://www.mayoclinic.org/healthy-lifestyle/nutrition-and-healthy-eating/in-depth/low-glycemic-index-diet/art-20048478"></a>
                                        <a href="https://www.mayoclinic.org/healthy-lifestyle/nutrition-and-healthy-eating/in-depth/low-glycemic-index-diet/art-20048478">
                                            https://www.mayoclinic.org/healthy-lifestyle/nutrition-and-healthy-eating/in-depth/low-glycemic-index-diet/art-20048478
                                        </a>
                                    </p>
                                </li>
                            </ul>
                        </ExpandableSection>
                    </div>
                </div>
            </div>
        </div>
    );
}