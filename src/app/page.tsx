"use client";
import React, { useState, useEffect } from "react";
import Head from "next/head"; // added import
import Image from "next/image";

export default function Page() {
	const [active, setActive] = useState<"home" | "infographic" | "research">("home");
	// modal state for lightbox
	const [modalOpen, setModalOpen] = useState(false);
	const [modalSrc, setModalSrc] = useState<string | null>(null);

	const openModal = (src: string) => {
		setModalSrc(src);
		setModalOpen(true);
	};
	const closeModal = () => {
		setModalOpen(false);
		setModalSrc(null);
	};

	// lock body scroll while modal is open
	useEffect(() => {
		document.body.style.overflow = modalOpen ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [modalOpen]);

	// close on Escape
	useEffect(() => {
		if (!modalOpen) return;
		const onKey = (e: KeyboardEvent) => {
			if (e.key === "Escape") closeModal();
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [modalOpen]);

	const styles: { [k: string]: React.CSSProperties } = {
		page: {
			background: "#e6f3ff",
			minHeight: "100vh",
			fontFamily: "Segoe UI, Roboto, Helvetica, Arial, sans-serif",
			color: "#333",
			paddingBottom: 40,
		},
		container: {
			maxWidth: 1100,
			margin: "0 auto",
			padding: "20px 16px",
		},
		header: {
			padding: "40px 0 10px",
		},
		title: {
			fontSize: 28,
			fontWeight: 700,
			margin: 0,
			color: "#333",
		},
		subtitle: {
			fontSize: 22,
			margin: "8px 0 0",
			color: "#444",
		},
		navBar: {
			marginTop: 18,
			background: "#eee",
			display: "flex",
			gap: 0,
			alignItems: "center",
			padding: "10px 12px",
			borderTop: "4px solid #ddd",
		},
		navItem: {
			padding: "10px 18px",
			cursor: "pointer",
			color: "#444",
			background: "transparent",
			border: "none",
			fontSize: 15,
		},
		activeNavItem: {
			borderBottom: "4px solid #333",
			background: "#e5e5e5",
		},
		layout: {
			display: "grid",
			gridTemplateColumns: "1fr 320px",
			gap: 24,
			marginTop: 24,
		},
		card: {
			background: "#fff",
			padding: 22,
			boxShadow: "0 0 0 1px rgba(0,0,0,0.03)",
		},
		h1: {
			fontSize: 34,
			margin: "0 0 12px",
			color: "#444",
		},
		articleTitle: {
			fontSize: 26,
			margin: "6px 0 12px",
			color: "#333",
		},
		paragraph: {
			lineHeight: 1.6,
			color: "#444",
			fontSize: 15,
			marginBottom: 16,
		},
		sidebarBox: {
			background: "#fff",
			padding: 12,
			marginBottom: 16,
			boxShadow: "0 0 0 1px rgba(0,0,0,0.03)",
		},
		search: {
			display: "flex",
			gap: 8,
			marginBottom: 12,
		},
		searchInput: {
			flex: 1,
			padding: "8px 10px",
			border: "1px solid #ddd",
		},
		searchBtn: {
			background: "#7bb342",
			color: "#fff",
			border: "none",
			padding: "8px 12px",
			cursor: "pointer",
		},
		thumb: {
			width: "100%",
			display: "block",
		},
		videoPlaceholder: {
			background: "#000",
			color: "#fff",
			height: 180,
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			fontSize: 18,
		},
	};

	return (
		<div style={styles.page}>
			<Head>
				<title>English 15 Infographic</title>
			</Head>

			<div style={styles.container}>
				<header style={styles.header}>
					<h2 style={styles.title}>English 15 Inforaphic Website </h2>
				</header>

				<nav style={styles.navBar} aria-label="Primary">
					<button
						type="button"
						onClick={() => setActive("home")}
						aria-current={active === "home" ? "page" : undefined}
						style={{ ...styles.navItem, ...(active === "home" ? styles.activeNavItem : {}) }}
					>
						Home
					</button>

					<button
						type="button"
						onClick={() => setActive("infographic")}
						aria-current={active === "infographic" ? "page" : undefined}
						style={{ ...styles.navItem, ...(active === "infographic" ? styles.activeNavItem : {}) }}
					>
						Pitching the Infographic
					</button>

					<button
						type="button"
						onClick={() => setActive("research")}
						aria-current={active === "research" ? "page" : undefined}
						style={{ ...styles.navItem, ...(active === "research" ? styles.activeNavItem : {}) }}
					>
						Researching &amp; Brainstorming
					</button>
				</nav>

				<div style={styles.layout}>
					<main>
						<section style={styles.card}>
							<h1 style={styles.h1}>
								{active === "home"
									? "Welcome"
									: active === "infographic"
									? "Pitching the Infographic"
									: "Researching & Brainstorming"}
							</h1>

							<article>
								{active === "home" && (
									<>
										<h2 style={styles.articleTitle}>Transforming Text to Infographic</h2>
										<p style={styles.paragraph}>
											Hello there! The Ukraine War has been a topic of great interest and concern for many. Because of this I wanted to show the impact that the War has caused the global economy as well as show who is supporting Ukraine's cause currently.
										</p>

										<p style={styles.paragraph}>This website has four main points/goals:</p>
										{/* Answers to the questions above */}
										<div style={{ ...styles.sidebarBox }}>
											<p style={styles.paragraph}>
												Purpose: To present a concise, visually-driven summary of how the Ukraine War has affected the global economy and to show which countries and organizations are publicly supporting Ukraine.
											</p>

											<p style={styles.paragraph}>
												Contents: The site includes the final infographic, the original source text and context, a statement of goals and design choices, data visualizations, and a short reflection on the design process.
											</p>

											<p style={styles.paragraph}>
												Organization: The site is organized into three main pages — Home (overview and outline), Pitching the Infographic (rhetorical choices and pitch), and Researching &amp; Brainstorming (notes, sources, and sample visuals). Each page groups related content and provides navigation to the other sections.
											</p>

											<p style={styles.paragraph}>
												Key takeaway: After reading, the audience should understand the infographic’s purpose, the main evidence and data that support it, and the intended audience and rhetorical choices behind the visual design.
											</p>
										</div>

										<h2 style={styles.articleTitle}>Final Infographic:</h2>
										<p style={styles.paragraph}>
										Here is the result of this project in terms of an infographic. It consists of two different pages. By clicking on either of the two you will be able to see them more clearly.
										</p>

										{/* Two infographic images side-by-side (force no-wrap; allow horizontal scroll if needed)
											click to open fullscreen modal */}
										<div
											style={{
												display: "flex",
												gap: 12,
												flexWrap: "nowrap",
												overflowX: "auto",
												alignItems: "flex-start",
												marginBottom: 12,
											}}
										>
											<figure
												style={{ margin: 0, width: 560, flex: "0 0 auto", cursor: "pointer" }}
												aria-hidden={modalOpen}
											>
												{/* clickable container: keyboard accessible */}
												<div
													role="button"
													tabIndex={0}
													onClick={() => openModal("/Eng15Infographic1.png")}
													onKeyDown={(e) => e.key === "Enter" && openModal("/Eng15Infographic1.png")}
													style={{ position: "relative", width: "100%", height: 360 }}
													aria-label="Open infographic page 1"
												>
													<Image src="/Eng15Infographic1.png" alt="Eng15 Infographic 1" fill style={{ objectFit: "contain" }} />
												</div>
												<figcaption style={{ fontSize: 12, color: "#666", textAlign: "center", marginTop: 6 }}>Page 1</figcaption>
											</figure>

											<figure
												style={{ margin: 0, width: 560, flex: "0 0 auto", cursor: "pointer" }}
												aria-hidden={modalOpen}
											>
												<div
													role="button"
													tabIndex={0}
													onClick={() => openModal("/Eng15Infographic2.png")}
													onKeyDown={(e) => e.key === "Enter" && openModal("/Eng15Infographic2.png")}
													style={{ position: "relative", width: "100%", height: 360 }}
													aria-label="Open infographic page 2"
												>
													<Image src="/Eng15Infographic2.png" alt="Eng15 Infographic 2" fill style={{ objectFit: "contain" }} />
												</div>
												<figcaption style={{ fontSize: 12, color: "#666", textAlign: "center", marginTop: 6 }}>Page 2</figcaption>
											</figure>
										</div>

										{/* Modal / Lightbox overlay */}
										{modalOpen && modalSrc && (
											<div
												role="dialog"
												aria-modal="true"
												onClick={(e) => {
													// close when clicking the overlay background
													if (e.target === e.currentTarget) closeModal();
												}}
												style={{
													position: "fixed",
													inset: 0,
													zIndex: 9999,
													display: "flex",
													alignItems: "center",
													justifyContent: "center",
													backgroundColor: "rgba(0,0,0,0.55)",
													backdropFilter: "blur(6px)",
												}}
											>
												<button
													onClick={closeModal}
													aria-label="Close image"
													style={{
														position: "absolute",
														right: 18,
														top: 18,
														zIndex: 10000,
														background: "rgba(255,255,255,0.9)",
														border: "none",
														padding: "8px 10px",
														cursor: "pointer",
														fontSize: 16,
														borderRadius: 6,
													}}
												>
													×
												</button>

												<div style={{ width: "90vw", maxWidth: 1200, height: "90vh", position: "relative", borderRadius: 6, background: "#fff", padding: 8 }}>
													<Image src={modalSrc} alt="Expanded infographic" fill style={{ objectFit: "contain" }} />
												</div>
											</div>
										)}

										<h2 style={styles.articleTitle}>Statement of Goals and Choices</h2>
										<p style={styles.paragraph}>Here is an in depth explanation about the thought process behind this infographpic and why certain design choices were made.</p>

										<h3 style={styles.articleTitle}>Project Development </h3>
										<p style={styles.paragraph}>
											This infographic initially began with a goal to inform readers about the financial and geopolitical aspects of the ongoing war in Ukraine. I was first interested in having a better understanding about how different countries were contributing to Ukraine’s defense and recovery as well as what contributions revealed about different countries priorities and global alliances. My data from the initial research phase was based on primary sources and data reports about the conflict. I realized quickly that a large volume of this would simply overcomplicate the infographic and make it difficult for readers to comprehend it properly. So, I created different graphs to make it less complex and have a much more visually interesting format.
										</p>

										<p style={styles.paragraph}>
											The drafting process meant selecting specific data that I wanted to focus on the most. Things like total aid amounts, different aid amounts, any periodic trends, military vs. nonmilitary support, and aid based on country GDP. Creating a rough sketch of potential layouts through wireframing and testing different visual styles helped refine the design. It helped make the overall infographic clearer and ensure that my what I was emphasizing was my main point of the visual overall. One example of this was making the comparison between European and U.S. aid a little larger overall and giving it its own dedicated graph. 
										</p>
										<p style={styles.paragraph}>
											By focusing on improving the flow of the infographic itself and creating a visual hierarchy of some sense I was able to adjust the color schemes. This meant I could differentiate different spots and organize the infographic. By adding subtitles to graphs and adding context I could help better guide the interpretation. Restructuring charts also meant that I could better convey trends in aid. I wanted to guarantee that any viewer, no matter what level of knowledge, could see and understand the main points of the infographic and see the points I’m conveying about aid to Ukraine.
										</p>

										<h3 style={styles.articleTitle}>Rhetorical Analysis</h3>
										<p style={styles.paragraph}>
											The underlying argument for this infographic is to inform and have people better recognize the scale and complex ties when it comes to support for Ukraine. The purpose is both informative and persuasive as it’s to show the aid isn’t just a point of generosity (although there is the humanitarian aspect) but also a strategic and political act that reflects a broader geopolitical beliefs and different countries’ alliances and stances. Using an infographic to present the data in a way that can be both easily compelling and understandable.
										</p>
										<p style={styles.paragraph}>
											The main audience is a student, educators, and policy enthusiasts who may not exactly have the time nor the expertise to look through a large report or research paper. Using a visual way to tell a story means the infographic can appeal to a broader audience demographic. The rhetorical situation itself is shaped by the urgency of the topic through things like ongoing war and public debates about foreign aid. Meaning that clarity and credibility are essential.
										</p>

										<h3 style={styles.articleTitle}>Choosing Content</h3>
										<p style={styles.paragraph}>
											What to include and what to leave out was a big portion of this infographic assignment. I made it a goal to focus more so on actual aid rather than military strategy or the outcome of different conflicts. While military developments are important they are also much more speculative and even emotionally charged. While financial data is much more outright and understandable, making it easy to assess when looking at an infographic.
										</p>
										{/* Added: Included vs Excluded list */}
										<div style={{ ...styles.sidebarBox, marginTop: 8 }}>
											<h4 style={{ fontSize: 16, margin: "0 0 8px", color: "#333" }}>I included:</h4>
											<ul style={{ ...styles.paragraph, paddingLeft: 20 }}>
												<li>Total aid figures from top donor countries</li>
												<li>Different monthly aid trends</li>
												<li>GDP comparisons</li>
												<li>Military and nonmilitary aid data</li>
											</ul>
											<h4 style={{ fontSize: 16, margin: "16px 0 8px", color: "#333" }}>I excluded:</h4>
											<ul style={{ ...styles.paragraph, paddingLeft: 20 }}>
												<li>Specific events</li>
												<li>Political commentary or opinion</li>
												<li>Aid from private organizations, or statements</li>
											</ul>
										</div>
										<p style={styles.paragraph}>
											These exclusions were mainly to ensure there was a focus on the numbers aspect and to not dilute the message at all. Including too many opinions or variables could mean confusing an audience that might have less knowledge about strategic analysis or the war itself.
										</p>

										<h3 style={styles.articleTitle}>Rhetorical Technological Literacy in the Design Process</h3>
										<p style={styles.paragraph}>
											Creating the infographic meant requiring a combination of both rhetorical awareness and technological literacy. Using Adobe Express I was able to adjust the visual elements and guaranteed that each chart and graph had a rhetorical purpose. One example for the graph comparing European and U.S. aid, it was designed with bold labels and contrasting colors to make it more apparent. As a rhetorical strategy to highlight a turning point in global support.
										</p>
										<p style={styles.paragraph}>
											I also applied different principles of visual rhetoric through this infographic. Including proximity, alignment, and contrast, as well as grouping. This helped establish more thematic connections between different sections while also ensuring that the infographic was well organized. Adding text boxes sparingly to give data and context also helped keep visuals from being overwhelming.
										</p>
										<p style={styles.paragraph}>
											Technological literacy was also necessary for this infographic, mainly with the role of data sourcing and verification. Using reliable databases and cross referencing figures meant I could ensure their accuracy and make the infographic as accurate as possible to the current information. Supporting the infographic’s ethos as it makes it more credible and a trustable source of information for the reader.
										</p>
										
										<h3 style={styles.articleTitle}>
											Examples of Visuals
										</h3>
										<p style={styles.paragraph}>Example 1: Monthly Aid Trend Chart</p>
										<p style={styles.paragraph}>
											This chart showed the fluctuations in government support to Ukraine over the time of conflict. The visual format means viewers can quickly find different trends or even spikes and dips that correlate with major events. This could be like the U.S. government administration changing after the presidential election.
										</p>
										<p>Example 2: GDP Based Aid</p>
										<p style={styles.paragraph}>
											By using the GDP of respective countries, it allows the challenging goal of understanding just how much aid each country is given to be understood better. It reveals which countries are doing most for a more equitable perspective rather than just straight dollar values.
										</p>
										<p style={styles.paragraph}>Example 3: Europe vs. U.S. Aid</p>
										<p style={styles.paragraph}>
											This graph shows the change in leadership when it comes to given aid and how Europe is overtaking the U.S. in aid contribution overall. It supports the argument that war has adjusted people’s perspectives and global alliances and how countries feel about their responsibilities. While a visual graph also makes it much more apparent making the infographic more persuasive.
										</p>
										<h3 style={styles.articleTitle}>Applied Course Concepts</h3>
										<div style={{ ...styles.sidebarBox, marginTop: 8 }}>
											<h4 style={{ fontSize: 18, margin: "0 0 10px", color: "#333" }}>Applied Course Concepts</h4>
											<p style={styles.paragraph}>
												Several key concepts came into play when working on this infographic.
											</p>
											<ul style={{ ...styles.paragraph, paddingLeft: 20 }}>
												<li>
													<strong>Rhetorical Situation:</strong> The necessity to understand the dynamics of purpose, audience, and context, and how it guided the design of the infographic.
												</li>
												<li>
													<strong>Multimodal Composition:</strong> By using an infographic, I showed how visual, textual, and numerical elements can work together.
												</li>
												<li>
													<strong>Ethos, Pathos, Logos:</strong> Although the infographic heavily relies on logos because of all the graphs, it also builds onto ethos through credible sourcing and pathos via the impact of aid.
												</li>
												<li>
													<strong>Revision and Reflection:</strong> Designing this infographic in an iterative manner meant I could do a lot of self-assessing which was important to achieving clarity in the infographic.
												</li>
											</ul>
											<h3 style={styles.articleTitle}>Final Reflection</h3>
											<p style={styles.paragraph}>This project taught me how to convert complex research into an infographic whose format is both powerful rhetorically and easily accessible. By applying these core concepts, I kept the infographic from being just a summary of data but instead something that informs and persuades readers about the necessity for aid in Ukraine.</p>
										</div>
									</>
								)}

								{active === "infographic" && (
									<>
										<h2 style={styles.articleTitle}>My Plan for an Infographic</h2>
										<p style={styles.paragraph}>
											For my topic I would like to remediate my first paper (the position paper) and specifically talk more about the impacts of the war. I’ll be able to implement this in an infographic because it’ll show the damages from the war and the expenses, along with how much budgeting from the U.S. government compared to other governments is used for aid to Ukraine. I chose this one because I thought there’s a ton of data involved with this one that is based on the economy. I’d like to focus more so on this data now rather than just my own and my family’s personal experiences.
										</p>
										<h2 style={styles.articleTitle}>The Original Paper</h2>
										<p style={styles.paragraph}>Here is the original paper that was the main reason why I created this infographic.</p>
										<h3 style={styles.articleTitle}>Supporting Ukraine: The Case for More Funding</h3>
										<p style={styles.paragraph}>For my topic I would like to remediate my first paper (the position paper) and specifically talk more about the impacts of the war. I’ll be able to implement this in an infographic because it’ll show the damages from the war and the expenses, along with how much budgeting from the U.S. government compared to other governments is used for aid to Ukraine. I chose this one because I thought there’s a ton of data involved with this one that is based on the economy. I’d like to focus more so on this data now rather than just my own and my family’s personal experiences.
										</p>
										<p style={styles.paragraph}>
											Having family in Europe is worrisome enough, let alone in Ukraine and Poland. A lot of my family, like my cousin had to flee their homes because of the airstrikes and or the fear of the Russian invasion, and a fear for their safety. Meanwhile, my aunt in Poland who own s a bed and breakfast in Leba has opened her doors to displaced families and refugees. Turning a modest two story house into what is now a temporary home for those who’ve lost refugee, from their homes to even family members. The toll from stress has been immense. Even mentioning it brings anxiety and worry to all my family, wondering if it’ll be the last time I hear one of their voices. Uncertainty, fear, and helplessness are constant companions.
										</p>
										<p style={styles.paragraph}>Having family in Europe is worrisome enough, let alone in Ukraine and Poland. A lot of my family, like my cousin had to flee their homes because of the airstrikes and or the fear of the Russian invasion, and a fear for their safety. Meanwhile, my aunt in Poland who own s a bed and breakfast in Leba has opened her doors to displaced families and refugees. Turning a modest two story house into what is now a temporary home for those who’ve lost refugee, from their homes to even family members. The toll from stress has been immense. Even mentioning it brings anxiety and worry to all my family, wondering if it’ll be the last time I hear one of their voices. Uncertainty, fear, and helplessness are constant companions.
										</p>
										<p style={styles.paragraph}>
											The war also triggered a mental health crisis. The World Health Organization, 68% of Ukrainians report a decline in their health, with 46% suffering from mental health issues and 41% from mental disorders (UN News). These aren’t just statistics, they reflect an emotional and psychological trauma that millions now endure daily. The medical system is overwhelmed, especially when considering the over 2,500 attacks on healthcare facilities since the war began. By mid-2024, 100,000 amputations had been performed due to war injuries. Access to care is deeply unequal with 25% off Ukrainians report a reduced access to healthcare, and internally displaced people face even greater barriers.
										</p>
										<p style={styles.paragraph}>
											The war’s impact extends far beyond Ukraine’s borders. With both the U.S. and the EU having poured billions into aid, ending debates about national priorities. But this isn’t just about charity, it also is about global stability. The war has contributed to global inflation, energy crises throughout the EU, and food shortages, affecting millions worldwide. These ripple effects show that war is not just a regional conflict, it’s a global issue that demands a global response. I also understand that not everyone agrees with the continued funding of Ukraine’s efforts against Russia. Humanitarian aid is about preserving life and dignity and should be a bipartisan issue. It’s about standing up for democracy and against aggression. Supporting Ukraine is not just about helping a distant country. It upholds the United States’ values of global democracy, values that have been repeated through the 20th and 21st centuries. 
										</p>
										<p style={styles.paragraph}>
											The refugee crisis has created long-term challenges. According to the UNHCR around 65% of Ukrainian refugees and 72% of internally displaced people still express a desire to return home, but many are uncertain due to the ongoing war. Some 59% of refugees say they might be forced to return even if it’s not their preferred choice, due to challenges in host countries like job scarcity and legal status (UNHCR, “Ukraine Emergency: Three Years On”). This shows that the crisis is not only about immediate survival but also about long term recovery and integration. The war has also devasted Ukraine’s infrastructure. Hundreds of schools and hospitals have been damaged or destroyed, significantly impacting people’s rights to education and health. In frontline areas, healthcare access is severely poor. In Kherson, 43% of adults report being unable to access care, followed by 24% in Kharkiv and 18% in Zaporizhzhia (UN News). These are regions where my own family once lived or still have ties. The thought that they or others like them might be denied basic medical care is awful. 
										</p>
										<p style={styles.paragraph}>
											Despite the insane amount of destruction, the resilience of the Ukrainian people is inspiring. More than 27,500 homes have already been repaired by humanitarian organizations like the UNHCR. It requires sustained funding, with the UNHCR appealing for nearly $1 billion in 2025 to continue supporting displaced people inside Ukraine and in neighboring countries (UN News). I believe that without continued support from the United States, Ukraine’s resistance would suffer, and the consequences would cause a rippling effect across the world. As someone with family directly affected by the war, I believe we should not turn away, but continue to stand, for the sake of global peace, democracy, and human dignity.
										</p>
									</>
								)}

								{active === "research" && (
									<>
										<h2 style={styles.articleTitle}>Researching &amp; Brainstorming</h2>
										<p style={styles.paragraph}>
											Researching and brainstorming for this project meant a ton of different raw data. It meant looking at different sources gathering different financial numbers that could help the average person better see the effects of the war and how exactly other countries are currently funding the war.
										</p>

										<p style={styles.paragraph}>
											For this website I had to do a lot more research in terms of creating a website that was easily navigatable. But luckily past experience with code meant I could easily create a website that would work for a project like this. So instead of using Penn State's implementation of WordPress I coded the website myself and am currently hosting it on a free web server.
										</p>

										<h2 style={styles.articleTitle}>Researching &amp; Brainstorming Outline:</h2>
										<ol style={{ ...styles.paragraph, paddingLeft: 18 }}>
											<li>Searching for Facts</li>
											<li>Sorting Out Data</li>
											<li>Finding Effective Illustrations</li>
											<li>Creating Sample Visuals</li>
											<li>Organizing and Improving the Infographic</li>

										</ol>

										<h2 style={styles.articleTitle}>Searching for Facts</h2>
										<p style={styles.paragraph}>
											Searching for facts meant using a variety of sources but especially the Kiel Institute. This organization had a ton of data that I was looking for that showed the impact that financial aid had as well as just relative numbers that showed each country's contributions and could link it to things like GDP making them more comparable
										</p>
										<h2 style={styles.articleTitle}>Sorting Out Data</h2>
										<p>
											I needed to do a lot of combing through data to find what would be most impactful. After finding reliable sources it was actually quite easy to add things I liked. But limiting the infographic in order to make sure it was well organized and not too cluttered was a difficult task. I had to decide what data would be the most impactful and important to a viewer within my target audience (people who are mainly interested in the Ukraine War but who may not have a lot of knowledge).
										</p>
										<h2 style={styles.articleTitle}>Finding Effective Illustrations</h2>
										<p>
											This was also an extremely important area. Effective illustrations meant that a viewer could quickly figure out what my infographic was about. This meant I could hook the viewer much more quickly and get their attention. My first thought was to add bold and large illustrations that weren't overly complex so they didn't outshine the actual data itself so that they only contributed to the overall theme of the infographic.
										</p>
										<h2 style={styles.articleTitle}>Creating Sample Visuals</h2>
										<p>
											The goal with this was to ensure that any data I gathered was in an organized graph or visual that made it an effective part of the infographic to the user. With infographics more is less when it comes to words so adding too many might distract the viewer or even make them disinterested.
										</p>
										<h2 style={styles.articleTitle}>Organizing and Improving the Infographic</h2>
										<p>
											Once I had all the elements it was time to actually design the infographic and then continue reiterating and improving upon it. This meant starting with a basic outline and boxes of gray that sepearted different visuals and groups of information. From there I began to add an overall theme of blue and yellow (the colors of the Ukrainian Flag) in order to create a more unified theme. After this was done I continued to adjust them in order to make it more effective and more neat.
										</p>
									</>
								)}
							</article>
						</section>
					</main>
				</div>
			</div>
		</div>
	);
}