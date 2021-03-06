/*
 * NOTE: Please update semesterManager in js/logic.js as well, after updating this file
 *
 * This file must only be edited manually!
 * Remember to update 'Klubsprecher' and 'Studium Plus'!
 */
 
 /* 
 *	NOTES to Conversion from Bachelor to Master
 *   Pflicht is always false, leave out
 *   vertiefung is always empty, logic uses kennung
 */

/*
 * Data structure for a course:
 *    kurz: Short text for the course. Make sure, it fits in the browser on 1024px
 *    lehrform: "Seminar" or "Projekt" or "Vorlesung"
 *    modul: "Vertiefungsgebiete" is what you want in most cases here
 *    semester: semester string: (WS|SS)[0-9]{2}, e.g. WS11
 *    pflicht: whether this course must be chosen or not
 *    empfohlen: integer indicating in which course this semester is recommended
 *    vertiefung: array containing strings for the vertiefungsgebiete, "BPET"/"HCT"/"IST"/"OSIS"/"SAMT" alphabetically!
 *    cp: how much credit points you get for this course
 *    vorher: identifier/key of the course/s which must be taken before the current one, e.g. 'mathematik1'
 *    dozent: self explaining
 *    nameLV: long name
 */

 var ws10_11 = "WS10/11",
    ss11    = "SS11",
    ws11_12 = "WS11/12",
    ss12    = "SS12",
    ws12_13 = "WS12/13",
    ss13    = "SS13",
    ws13_14 = "WS13/14";

var data = {
    bringYourOwnProject: {
		kurz: "BYOP",
        kennung: ["SSK-KO","SSK-SK","SSK-MA"], 
        lehrform: ["Seminar"], 
        modul: ["Vertiefungsgebiete"], 
        semester: [ss13, ws13_14], 
        benotet: false, 
        pflicht: false, 
        cp: 3, 
        dozent: ["Dr. Karen Dittmann"], 
        nameLV: "Bring your own project: IT-Projekte erfolgreich planen und managen"
    }, 
    interactiveData: {
		kurz: "Interactive Data",
        kennung: ["ITSE","VT SAMT","VT HCT"], 
        lehrform: ["Seminar"], 
        modul: ["IT-Systems Engineering","Vertiefungsgebiete"], 
        semester: [ss13], 
        benotet: true, 
        pflicht: false, 
        cp: 6, 
        dozent: ["Prof. Dr. Robert Hirschfeld","Marcel Taeumel","Tim Felgentreff","Jens Lincke"], 
        nameLV: "Interactive Representations of Data Structures and Algorithms"
    }, 
    informationssicherheit: {
		kurz: "Information<br />Security",
        kennung: ["ITSE","VT IST","VT OSIS"], 
        lehrform: ["Vorlesung"," \u00dcbung"], 
        modul: ["IT-Systems Engineering","Vertiefungsgebiete"], 
        semester: [ss13], 
        benotet: true, 
        pflicht: false, 
        cp: 6, 
        dozent: ["Prof. Dr. Christoph Meinel"], 
        nameLV: "Informationssicherheit"
    }, 
    advancedRecommendationTechniques: {
		kurz: "Advanced<br />Recommandation",
        kennung: ["VT BPET","VT OSIS"], 
        lehrform: ["Seminar"," Projekt"], 
        modul: ["Vertiefungsgebiete"], 
        semester: [ss13], 
        benotet: true, 
        pflicht: false, 
        cp: 6, 
        dozent: ["Dr. Gjergji Kasneci"], 
        nameLV: "Advanced Recommendation Techniques"
    }, 
    inMemoryDatabases: {
		kurz: "In Memory<br />Databases",
        kennung: ["ITSE","VT BPET","VT OSIS","VT SAMT"], 
        lehrform: ["Seminar"], 
        modul: ["IT-Systems Engineering","Vertiefungsgebiete"], 
        semester: [ss13], 
        benotet: true, 
        pflicht: false, 
        cp: 6, 
        dozent: ["Martin Faust","David Schwalb","Dipl.-Kfm. Jens Kr\u00fcger","Dr. J\u00fcrgen M\u00fcller","Christian Schwarz"], 
        nameLV: "In-Memory Databases: Algorithms and Data Structures on Modern Hardware"
    }, 
    dataProfilingAndCleansing: {
		kurz: "Data Profiling<br /> and Cleansing",
        kennung: ["ITSE","VT BPET","VT OSIS"], 
        lehrform: ["Vorlesung"," \u00dcbung"], 
        modul: ["Vertiefungsgebiete"], 
        semester: [ss13], 
        benotet: true, 
        pflicht: false, 
        cp: 6, 
        dozent: ["Prof. Dr. Felix Naumann"], 
        nameLV: "Data Profiling and Data Cleansing"
    }, 
    duplicationDetection: {
		kurz: "Duplication Detection",
        kennung: ["VT BPET","VT OSIS"], 
        lehrform: ["Seminar"], 
        modul: ["Vertiefungsgebiete"], 
        semester: [ss13], 
        benotet: true, 
        pflicht: false, 
        cp: 6, 
        dozent: ["Prof. Dr. Felix Naumann","Arvid Heise"], 
        nameLV: "Large Scale Duplicate Detection"
    }, 
	ITEntrepreneurship: {
		kurz: "Entrepreneurship",
        kennung: ["SSK-MA", "SSK-RE", "SSK-KO"], 
        lehrform: ["Seminar"], 
        modul: ["Softskills"],  
        semester: [ws13_14], 
        benotet: false, 
        cp: 6, 
        dozent: ["Dr. Rouven Westphal"], 
        nameLV: "IT-Entrepreneurship"
    },
    ITEntrepreneurshipII: {
		kurz: "Entrepreneurship II",
        kennung: ["SSK-MA","SSK-KO","SSK-RE"], 
        lehrform: ["Seminar"], 
        modul: ["Softskills"], 
        semester: [ss13], 
        benotet: true, 
        pflicht: false, 
        cp: 3, 
        dozent: ["Dr. Rouven Westphal"], 
        nameLV: "IT Entrepreneurship II"
    }, 
    penTesting: {
		kurz: "Penetration Testing",
        kennung: ["ITSE","VT IST","VT OSIS"], 
        lehrform: ["Seminar"," Projekt"], 
        modul: ["IT-Systems Engineering","Vertiefungsgebiete"], 
        semester: [ss13], 
        benotet: true, 
        pflicht: false, 
        cp: 6, 
        dozent: ["Prof. Dr. Christoph Meinel","Hosnieh Rafiee"], 
        nameLV: "Penetration Testing and Securing IPv6 Networks"
    }, 
    hciProjectSeminar: {
		kurz: "HCI Cameras<br /> and Haptics",
        kennung: ["ITSE","VT HCT","VT SAMT"], 
        lehrform: ["Projekt"," Seminar"], 
        modul: ["IT-Systems Engineering","Vertiefungsgebiete"], 
        semester: [ss13], 
        benotet: true, 
        pflicht: false, 
        cp: 6, 
        dozent: ["Prof. Dr. Patrick Baudisch"], 
        nameLV: "HCI Project Seminar on Cameras, Haptics & Interactive Fabrication"
    }, 
    personalLeadership: {
		kurz: "Personal Leadership",
        kennung: ["SSK-MA"], 
        lehrform: ["Seminar"], 
        modul: ["Softskills"], 
        semester: [ss13], 
        benotet: true, 
        pflicht: false, 
        vertiefung: ["Softskills"], 
        cp: 3, 
        dozent: ["Dr. Rolf Specht"], 
        nameLV: "Personal Leadership Skills"
    }, 
    Geovisualisierung: {
		kurz: "Geovisualisierung",
        kennung: ["ITSE","VT HCT","VT IST"], 
        lehrform: ["Vorlesung"], 
        modul: ["Vertiefungsgebiete"," IT-Systems Engineering"], 
        semester: [ss13], 
        benotet: true, 
        pflicht: false, 
        cp: 6, 
        dozent: ["Prof. Dr. J\u00fcrgen D\u00f6llner","Sebastian Pasewaldt","Sebastian Schmechel","Dr. Matthias Trapp"], 
        nameLV: "Geovisualisierung"
    }, 
    regelungSteuerung: {
		kurz: "Regelung & Steuerung",
        kennung: ["ITSE","VT OSIS","VT SAMT"], 
        lehrform: ["Vorlesung"], 
        modul: ["Vertiefungsgebiete"," IT-Systems Engineering"], 
        semester: [ss13], 
        benotet: true, 
        pflicht: false, 
        cp: 6, 
        dozent: ["Dr.-Ing. Ralf Wollowski"], 
        nameLV: "Systemtechnische Grundlagen der Regelungs-<br />und Steuerungstechnik"
    }, 
    IntroductionOfDesignThinking: {
		kurz: "Introduction<br />Design Thinking",
        kennung: ["SSK-DT"], 
        lehrform: ["Seminar"," Projekt"], 
        modul: ["Softskills"], 
        semester: [ss13,ws13_14], 
        benotet: true, 
        pflicht: false, 
        cp: 3, 
        dozent: ["Dr. Claudia Nicolai","Prof. Ulrich Weinberg"], 
        nameLV: "Introduction of Design Thinking (Einf\u00fchrung in das Design Thinking)"
    }, 
    SemanticMultimedia: {
		kurz: "Semantic Multimedia",
        kennung: ["VT IST","VT OSIS","VT HCT"], 
        lehrform: ["Seminar"], 
        modul: ["Vertiefungsgebiete"], 
        semester: [ss13], 
        benotet: true, 
        pflicht: false, 
        cp: 6, 
        dozent: ["Dr. rer. nat. Harald Sack","J\u00f6rg Waitelonis","Nadine Steinmetz","Magnus Knuth"], 
        nameLV: "Semantic Multimedia"
    }, 
    AdvancedMDE: {
		kurz: "Advanced MDE",
        kennung: ["ITSE","VT SAMT"], 
        lehrform: ["Seminar"," Projekt"], 
        modul: ["IT-Systems Engineering","Vertiefungsgebiete"], 
        semester: [ss13], 
        benotet: true, 
        pflicht: false, 
        cp: 6, 
        dozent: ["Prof. Dr. Holger Giese","M. Sc. Thomas Beyhl"], 
        nameLV: "Advanced MDE: Model Management"
    }, 
    KonfliktUndKommunikationsmanagement: {
		kurz: "Kommunikations-<br />management",
        kennung: ["SSK-KO","SSK-MA"], 
        lehrform: ["Seminar"], 
        modul: ["Softskills"], 
        semester: [ss13,ws13_14], 
        benotet: true, 
        pflicht: false, 
        cp: 3, 
        dozent: ["Dr. Michaela Schumacher"], 
        nameLV: "Konflikt-<br />und Kommunikationsmanagement"
    }, 
    TrendsInIT: {
		kurz: "Trends in IT",
        kennung: ["ITSE","VT BPET","VT OSIS","VT SAMT"], 
        lehrform: ["Vorlesung"], 
        modul: ["IT-Systems Engineering","Vertiefungsgebiete"], 
        semester: [ss13], 
        benotet: true, 
        pflicht: false, 
        cp: 3, 
        dozent: ["Prof. Dr. Hasso Plattner"], 
        nameLV: "Trends and Concepts in the Software Industry I: Inner Mechanics of In-Memory Databases"
    }, 
    eventProcessingTechnologies: {
		kurz: "Event Processing",
        kennung: ["VT BPET","VT OSIS"], 
        lehrform: ["Seminar"], 
        modul: ["Vertiefungsgebiete"], 
        semester: [ss13], 
        benotet: true, 
        pflicht: false, 
        cp: 6, 
        dozent: ["Prof. Dr. Jan Mendling"], 
        nameLV: "Event Processing Technologies"
    }, 
    algorithmenGeovisualisierung: {
		kurz: "Algorithmen der<br />Geovisualisierung",
        kennung: ["ITSE","VT HCT","VT IST"], 
        lehrform: ["Seminar"," Projekt"], 
        modul: ["Vertiefungsgebiete"," IT-Systems Engineering"], 
        semester: [ss13], 
        benotet: true, 
        pflicht: false, 
        cp: 6, 
        dozent: ["Prof. Dr. J\u00fcrgen D\u00f6llner","Rico Richter","Stefan Buschmann"], 
        nameLV: "Algorithmen und Techniken der Geovisualisierung (ehem.: Geovisualisierungsverfahren)"
    }, 
    Softwarevisualisierung: {
		kurz: "Software-<br />visualisierung",
        kennung: ["VT HCT","VT OSIS","VT SAMT"], 
        lehrform: ["Seminar"], 
        modul: ["Vertiefungsgebiete"], 
        semester: [ss13], 
        benotet: true, 
        pflicht: false, 
        cp: 6, 
        dozent: ["Prof. Dr. J\u00fcrgen D\u00f6llner","Jonas Tr\u00fcmper","Sebastian Schmechel","Sebastian Kay Belle"], 
        nameLV: "Softwarevisualisierungsverfahren"
    }, 
    automatedAnalysisOfFormalModels: {
		kurz: "Auto. Analysis of<br />Formal Models",
        kennung: ["ITSE","VT SAMT"], 
        lehrform: ["Seminar"], 
        modul: ["IT-Systems Engineering","Vertiefungsgebiete"], 
        semester: [ss13,ws13_14], 
        benotet: true, 
        pflicht: false, 
        cp: 3, 
        dozent: ["Prof. Dr. Holger Giese","Leen Lambers","M.Sc. Johannes Dyck"], 
        nameLV: "Automated Analysis of Formal Models"
    }, 
    dependableSystems: {
		kurz: "Dependable<br />Systems",
        kennung: ["ITSE","VT OSIS"], 
        lehrform: ["Vorlesung"], 
        modul: ["IT-Systems Engineering","Vertiefungsgebiete"], 
        semester: [ss13], 
        benotet: true, 
        pflicht: false, 
        cp: 6, 
        dozent: ["Dr. Peter Tr\u00f6ger"], 
        nameLV: "Dependable Systems"
    }, 
    productInnovationAndEngineering: {
		kurz: "Product Innovation",
        kennung: ["ITSE","VT BPET","VT HCT"], 
        lehrform: ["Projekt"," Seminar"], 
        modul: ["Vertiefungsgebiete"," IT-Systems Engineering"], 
        semester: [ss13], 
        benotet: true, 
        pflicht: false, 
        cp: 6, 
        dozent: ["Dr. J\u00fcrgen M\u00fcller","Thomas Kowark","Dipl.-Kfm. Jens Kr\u00fcger"], 
        nameLV: "Global Team-Based Product Innovation & Engineering II -<br />ME 310"
    }, 
    Fuehrungskompetenz: {
		kurz: "F\u00fchrungs-<br />kompetenz",
        kennung: ["SSK-MA"], 
        lehrform: ["Seminar"], 
        modul: ["Softskills"], 
        semester: [ss13], 
        benotet: true, 
        pflicht: false, 
        cp: 6, 
        dozent: ["Michael Karl Heidemann M.A.","Eugen Unger"], 
        nameLV: "F\u00fchrungskompetenz"
    }, 
    softwareAdaption: {
		kurz: "Software Adaption",
        kennung: ["ITSE","VT SAMT"], 
        lehrform: ["Vorlesung"," Projekt"], 
        modul: ["IT-Systems Engineering","Vertiefungsgebiete"], 
        semester: [ss13], 
        benotet: true, 
        pflicht: false, 
        cp: 6, 
        dozent: ["Prof. Dr. Holger Giese","Thomas Vogel"], 
        nameLV: "Software Adaption"
    }, 
    ueberzeugendPraesentieren: {
		kurz: "\u00dcberzeugend<br />pr\u00e4sentieren",
        kennung: ["SSK-KO"], 
        lehrform: ["Seminar"], 
        modul: ["Softskills"], 
        semester: [ss13], 
        benotet: true, 
        pflicht: false, 
        cp: 3, 
        dozent: ["Dr. Werner Dieball"], 
        nameLV: "\u00dcberzeugend pr\u00e4sentieren -<br />Noch besser auftreten! (Fortgeschrittene)"
    }, 
    hciResearch: {
		kurz: "HCI Research",
        kennung: ["ITSE","VT HCT","VT SAMT"], 
        lehrform: ["Vorlesung"], 
        modul: ["IT-Systems Engineering","Vertiefungsgebiete"], 
        semester: [ss13], 
        benotet: true, 
        pflicht: false, 
        cp: 6, 
        dozent: ["Prof. Dr. Patrick Baudisch"], 
        nameLV: "Human Computer Interaction Research"
    }, 
    managementEssentials: {
		kurz: "Management Essentials",
        kennung: ["SSK-MA"], 
        lehrform: ["Vorlesung"], 
        modul: ["Softskills"], 
        semester: [ss13], 
        benotet: true, 
        pflicht: false, 
        cp: 3, 
        dozent: ["Prof. Dr. Katharina H\u00f6lzle"], 
        nameLV: "Management Essentials"
    }, 
    advancedDesignThinking: {
		kurz: "D-School<br />Advanced Track",
        kennung: ["SSK-DT"], 
        lehrform: ["Seminar"," Projekt"], 
        modul: ["Softskills"], 
        semester: [ss13, ws13_14], 
        benotet: true, 
        pflicht: false, 
        cp: 6, 
        dozent: ["Dr. Claudia Nicolai","Prof. Ulrich Weinberg"], 
        nameLV: "Advanced Design Thinking (D-School Advanced Track)"
    }, 
    Englisch3: {
		kurz: "Fachenglisch<br />Level 3",
        kennung: ["SSK-SK","SSK-KO"], 
        lehrform: ["Seminar"], 
        modul: ["Softskills"], 
        semester: [ss13, ws13_14], 
        benotet: true, 
        pflicht: false, 
        cp: 3, 
        dozent: ["David Meier"], 
        nameLV: "Fachspezifisches Englisch (Level 3)"
    }, 
    Unternehmensgruendung: {
		kurz: "Unternehmens-<br />gr\u00fcndung",
        kennung: ["SSK-KO","SSK-MA","SSK-RE"], 
        lehrform: ["Vorlesung"], 
        modul: ["Softskills"], 
        semester: [ss13], 
        benotet: true, 
        pflicht: false, 
        cp: 6, 
        dozent: ["Prof. Dr. Katharina H\u00f6lzle","Dr. Jens Schmidt-Ehmcke"], 
        nameLV: "Unternehmensgr\u00fcndung im IT-Sektor"
    }, 
    softwareProfiling: {
		kurz: "Software Profiling",
        kennung: ["ITSE","VT OSIS"], 
        lehrform: ["Seminar"], 
        modul: ["IT-Systems Engineering","Vertiefungsgebiete"], 
        semester: [ss13], 
        benotet: true, 
        pflicht: false, 
        cp: 3, 
        dozent: ["Dr. Peter Tr\u00f6ger","Frank Feinbube"], 
        nameLV: "Software Profiling"
    }, 
    schnittstellenGeoinformationGeokommunikation: {
		kurz: "Geo-Schnittstellen",
        kennung: ["VT HCT","VT IST"], 
        lehrform: ["Vorlesung"], 
        modul: ["Vertiefungsgebiete"], 
        semester: [ss13], 
        benotet: true, 
        pflicht: false, 
        cp: 3, 
        dozent: ["Dr. techn. Markus Jobst","Sebastian Pasewaldt"], 
        nameLV: "Schnittstellen der Geoinformation und Geokommunikation"
    }, 
    softwareAsAService: {
		kurz: "Software as a Service",
        kennung: ["ITSE","VT IST","VT SAMT"], 
        lehrform: ["Seminar"], 
        modul: ["IT-Systems Engineering","Vertiefungsgebiete"], 
        semester: [ss13], 
        benotet: true, 
        pflicht: false, 
        cp: 3, 
        dozent: ["Prof. Dr. Christoph Meinel","Eyad Saleh"], 
        nameLV: "Software-as-a-Service and Multi-tenancy"
    }, 
    BusinessEtikette: {
		kurz: "Business Etikette",
        kennung: ["SSK-SK","SSK-KO"], 
        lehrform: ["Seminar"], 
        modul: ["Softskills"], 
        semester: [ss13, ws13_14], 
        benotet: true, 
        pflicht: false, 
        cp: 3, 
        dozent: ["Dr. Timm Krohn","Imme Vogelsang"], 
        nameLV: "Business Etikette -<br />HPI Charm School"
    }, 
    designThinkingBasics: {
		kurz: "D-School<br />Basic Track",
        kennung: ["SSK-DT"], 
        lehrform: ["Seminar"," Projekt"], 
        modul: ["Softskills"], 
        semester: [ss13,ws13_14], 
        benotet: true, 
        pflicht: false, 
        cp: 9, 
        dozent: ["Dr. Claudia Nicolai","Prof. Ulrich Weinberg"], 
        nameLV: "Design Thinking Basics (D-School Basic Track)"
    }, 
    CloudUndVirtualisierung: {
		kurz: "Cloud &<br /> Virtualisierung",
        kennung: ["ITSE","VT IST","VT OSIS"], 
        lehrform: ["Seminar"], 
        modul: ["IT-Systems Engineering","Vertiefungsgebiete"], 
        semester: [ss13], 
        benotet: true, 
        pflicht: false, 
        cp: 3, 
        dozent: ["Prof. Dr. Christoph Meinel","Maxim Schnjakin"], 
        nameLV: "Cloud und Virtualisierung"
    }, 
    DesigningProgrammingInMemoryDatabases: {
		kurz: "Designing In-Mem DB",
        kennung: ["ITSE","VT BPET","VT OSIS","VT SAMT"], 
        lehrform: ["Projekt"," Seminar"], 
        modul: ["IT-Systems Engineering","Vertiefungsgebiete"], 
        semester: [ss13], 
        benotet: true, 
        pflicht: false, 
        cp: 6, 
        dozent: ["Christian Schwarz","Dr. J\u00fcrgen M\u00fcller","Dipl.-Kfm. Jens Kr\u00fcger"], 
        nameLV: "Designing and Programming Applications for In-Memory Databases"
    }, 
    StudiumPlus: {
		kurz: "Studium Plus",
        kennung: ["SSK-SK","SSK2"], 
        lehrform: [""], 
        modul: ["Softskills"], 
        semester: [ss13], 
        benotet: false, 
        pflicht: false, 
        cp: 3, 
        dozent: [""], 
        nameLV: "StudiumPlus"
    }, 
    seminarDesForschungskollegs: {
		kurz: "Seminar des<br />Forschungskollegs",
        kennung: ["VT BPET","VT HCT","VT IST","VT OSIS","VT SAMT"], 
        lehrform: ["Seminar"], 
        modul: ["Vertiefungsgebiete"], 
        semester: [ss13, ws13_14], 
        benotet: false, 
        pflicht: false, 
        cp: 3, 
        dozent: ["Prof. Dr. Andreas Polze","Prof. Dr. Robert Hirschfeld"], 
        nameLV: "Seminar des Forschungskollegs"
    }, 
    cloudSicherheit: {
		kurz: "Cloud Sicherheit",
        kennung: ["VT IST","VT OSIS","VT SAMT"], 
        lehrform: ["Seminar"], 
        modul: ["Vertiefungsgebiete"], 
        semester: [ss13], 
        benotet: true, 
        pflicht: false, 
        cp: 3, 
        dozent: ["Prof. Dr. Andreas Polze","Christian Neuhaus"], 
        nameLV: "Algorithmen und Analysemethoden f\u00fcr Sicherheit in Cloud-Infrastrukturen"
    }, 
    PersoenlichkeitUndSelbstmanagement: {
		kurz: "Pers\u00f6nlichkeit &<br />Selbstmanagement",
        kennung: ["SSK-KO","SSK-MA"], 
        lehrform: ["Seminar"], 
        modul: ["Vertiefungsgebiete"], 
        semester: [ss13], 
        benotet: true, 
        pflicht: false, 
        cp: 3, 
        dozent: ["Dr. Michaela Schumacher"], 
        nameLV: "Pers\u00f6nlichkeit und Selbstmanagement"
    },
	personalManagementSkills: {
		kurz: "Personal<br />Management",
        kennung: ["SSK-MA"], 
        lehrform: ["Seminar"], 
        modul: ["Softskills"], 
        semester: [ws13_14], 
        benotet: true, 
        cp: 3, 
        dozent: ["Dr. Rolf Specht"], 
        nameLV: "Personal Management Skills"
    }, 
	itRecht: {
		kurz: "IT-Recht",
        kennung: ["SSK-RE"], 
        lehrform: ["Vorlesung"], 
        modul: ["Softskills"],  
        semester: [ws13_14], 
        benotet: true, 
        cp: 3, 
        dozent: ["Dr. Anselm Brandi-Dohrn", "Monika Menz"], 
        nameLV: "IT-Recht"
    }, 
	methodikGeoinformationstechnik: {
		kurz: "Methodik<br />GeoInfo",
        kennung: ["VT HCT", "VT IST"], 
        lehrform: ["Vorlesung"], 
        modul: ["Vertiefungsgebiete"],  
        semester: [ws13_14], 
        benotet: true, 
        cp: 3, 
        dozent: ["Dr. techn. Markus Jobst"], 
        nameLV: "Methodik der Geoinformationstechnik"
    }, 
	HCIProject: {
		kurz: "HCI<br />Projekt",
        kennung: ["ITSE", "VT HCT", "VT SAMT"], 
        lehrform: ["Projekt", " Seminar"], 
        modul: ["IT-Systems Engineering", " Vertiefungsgebiete"],  
        semester: [ws13_14], 
        benotet: true, 
        cp: 6, 
        dozent: ["Prof. Dr. Patrick Baudisch"], 
        nameLV: "HCI Project Seminar on Interactive Fabrication and Muscle Interfaces"
    }, 
	productInnovationEngineeringII: {
		kurz: "Product<br />Engineering II",
        kennung: ["MA1"], 
        lehrform: ["Seminar", " Projekt"], 
        modul: ["IT-Systems Engineering", " Vertiefungsgebiete"],  
        semester: [ws13_14], 
        benotet: true, 
        cp: 3, 
        dozent: ["Dr. Matthias Uflacker", "Dipl.-Kfm. Jens Kr\u00fcger", "Thomas Kowark", "Franziska H\u00e4ger"], 
        nameLV: "Global Team-Based Product Innovation & Engineering III - ME 310 Coaching Research"
    },
	semanticWebTechnologien: {
		kurz: "Semantic<br />Web",
        kennung: ["ITSE", "VT BPET", "VT IST"], 
        lehrform: ["Vorlesung", " \u00dcbung"], 
        modul: ["IT-Systems Engineering", " Vertiefungsgebiete"],  
        semester: [ws13_14], 
        benotet: true, 
        cp: 6, 
        dozent: ["Dr. rer. nat. Harald Sack"], 
        nameLV: "Semantic Web Technologien"
    }, 
	dataMining: {
		kurz: "Data<br />Mining",
        kennung: ["VT OSIS", "VT SAMT"], 
        lehrform: ["Vorlesung", " \u00dcbung"], 
        modul: ["Vertiefungsgebiete"],  
        semester: [ws13_14], 
        benotet: true, 
        cp: 6, 
        dozent: ["Dr. Gjergji Kasneci"], 
        nameLV: "Data Mining and Probabilistic Reasoning"
    },
	socialMediaAnalyses: {
		kurz: "Social<br />Media",
        kennung: ["ITSE", "VT IST", "VT OSIS"], 
        lehrform: ["Seminar", " Projekt"], 
        modul: ["IT-Systems Engineering", " Vertiefungsgebiete"],  
        semester: [ws13_14], 
        benotet: true, 
        cp: 6, 
        dozent: ["Prof. Dr. Christoph Meinel", "Philipp Berger", "Patrick Hennig"], 
        nameLV: "Social Media Analyses"
    },
	eingebetteteBetriebssysteme: {
		kurz: "Embedded<br />Systems",
        kennung: ["VT IST", "VT OSIS", "VT SAMT"], 
        lehrform: ["Vorlesung", " Projekt"], 
        modul: ["Vertiefungsgebiete"],  
        semester: [ws13_14], 
        benotet: true, 
        cp: 6, 
        dozent: ["Prof. Dr. Andreas Polze", "Frank Feinbube", "Uwe Hentschel"], 
        nameLV: "Eingebettete Betriebssysteme"
    }, 
	networkSecurityPractice: {
		kurz: "Network<br />Security",
        kennung: ["ITSE", "VT IST", "VT OSIS"], 
        lehrform: ["Seminar"], 
        modul: ["IT-Systems Engineering", " Vertiefungsgebiete"],  
        semester: [ws13_14], 
        benotet: true, 
        cp: 6, 
        dozent: ["Dr. Feng Cheng", "Prof. Dr. Christoph Meinel"], 
        nameLV: "Network Security in Practice"
    }, 
	businessProcessCompliance: {
		kurz: "BPC",
        kennung: ["VT BPET", "VT SAMT"], 
        lehrform: ["Vorlesung"], 
        modul: ["Vertiefungsgebiete"],  
        semester: [ws13_14], 
        benotet: true, 
        cp: 3, 
        dozent: ["Matthias Kunze"], 
        nameLV: "Business Process Compliance"
    },
	softwareAnalytics: {
		kurz: "Software<br />Analytics",
        kennung: ["ITSE", "VT HCT", "VT SAMT"], 
        lehrform: ["Seminar"], 
        modul: ["IT-Systems Engineering", " Vertiefungsgebiete"],  
        semester: [ws13_14], 
        benotet: true, 
        cp: 6, 
        dozent: ["Prof. Dr. J\u00fcrgen D\u00f6llner", "Sebastian Schmechel", "Sebastian Kay Belle", "Jonas Tr\u00fcmper", "Daniel Limberger"], 
        nameLV: "Software Analytics"
    },
	sicherheitInKomplexenITLandschaften: {
		kurz: "Sicherheit<br />komplexer IT", 
        kennung: ["ITSE", "VT IST", "VT BPET", "VT OSIS"], 
        lehrform: ["Seminar"], 
        modul: ["Vertiefungsgebiete"],  
        semester: [ws13_14], 
        benotet: true, 
        cp: 6, 
        dozent: ["Prof. Dr. Christoph Meinel", "Dr. Michael Menzel"], 
        nameLV: "Sicherheit in komplexen IT-Landschaften"
    }, 
	virtuelleMaschinen: {
		kurz: "Virtuelle<br />Maschinen",
        kennung: ["VT OSIS", "VT SAMT"], 
        lehrform: ["Projekt", " Seminar"], 
        modul: ["Vertiefungsgebiete"],  
        semester: [ws13_14], 
        benotet: true, 
        cp: 3, 
        dozent: ["Prof. Dr. Robert Hirschfeld", "Tobias Pape", "Tim Felgentreff", "Bastian Steinert"], 
        nameLV: "Virtuelle Maschinen und Ausf\u00fchrungsumgebungen"
    },
	itFallstudien: {
		kurz: "Fallstudien",
        kennung: ["SSK-MA", "SSK-RE"], 
        lehrform: ["Vorlesung"], 
        modul: ["Softskills"],  
        semester: [ws13_14], 
        benotet: true, 
        cp: 6, 
        dozent: ["Prof. Dr.-Ing. Werner Zorn"], 
        nameLV: "IT-Fallstudien - Was wir aus gescheiterten IT-Projekten lernen k\u00f6nnen"
    }, 
	productInnovationEngineeringI: {
		kurz: "Product<br />Engineering I",
        kennung: ["MA1"], 
        lehrform: ["Seminar", " Projekt"], 
        modul: ["IT-Systems Engineering", " Vertiefungsgebiete"],  
        semester: [ws13_14], 
        benotet: true, 
        cp: 3, 
        dozent: ["Dr. Matthias Uflacker", "Dipl.-Kfm. Jens Kr\u00fcger", "Thomas Kowark", "Franziska H\u00e4ger"], 
        nameLV: "Global Team-Based Product Innovation & Engineering III - ME 310 Coaching Research"
    },
	privacyAndSecurityIPv6: {
		kurz: "Privacy&Sec<br />IPv6",
        kennung: ["ITSE", "VT IST", "VT OSIS"], 
        lehrform: ["Seminar", " Projekt"], 
        modul: ["Vertiefungsgebiete", " IT-Systems Engineering"],  
        semester: [ws13_14], 
        benotet: true, 
        vertiefung: [""], 
        cp: 6, 
        dozent: ["Prof. Dr. Christoph Meinel", "Hosnieh Rafiee"], 
        nameLV: "Privacy and Security in IPv6"
    }, 
	statistischeDatenanalyse: {
		kurz: "statistische<br />Datenanalyse",
        kennung: ["ITSE", "VT BPET"], 
        lehrform: ["Vorlesung"], 
        modul: ["IT-Systems Engineering", " Vertiefungsgebiete"],  
        semester: [ws13_14], 
        benotet: true, 
        vertiefung: [""], 
        cp: 6, 
        dozent: ["apl. Prof. Dr. Hannelore Liero"], 
        nameLV: "Statistische Datenanalyse"
    }, 
	pearlsComputerScience: {
		kurz: "Pearls",
        kennung: ["VT BPET", "VT OSIS", "VT SAMT"], 
        lehrform: ["Seminar"], 
        modul: ["Vertiefungsgebiete"],  
        semester: [ws13_14], 
        benotet: true, 
        vertiefung: ["Information Systems", " Business Computing"], 
        cp: 3, 
        dozent: ["Prof. Dr. Mathias Weske"], 
        nameLV: "Pearls of Computer Science"
    }, 
	seminarGeovisualisierung: {
		kurz: "Geo Seminar",
        kennung: ["ITSE", "VT HCT", "VT IST"], 
        lehrform: ["Seminar", " Projekt"], 
        modul: ["Vertiefungsgebiete", " IT-Systems Engineering"],  
        semester: [ws13_14], 
        benotet: true, 
        cp: 6, 
        dozent: ["Prof. Dr. J\u00fcrgen D\u00f6llner", "Rico Richter", "Amir Semmo"], 
        nameLV: "Seminar Geovisualisierung"
    }, 
    TrendsInITII: {
		kurz: "Trends in IT II",
        kennung: ["ITSE","VT BPET","VT OSIS","VT SAMT"], 
        lehrform: ["Vorlesung"], 
        modul: ["IT-Systems Engineering","Vertiefungsgebiete"], 
        semester: [ws13_14], 
        benotet: true, 
        pflicht: false, 
        cp: 3, 
        dozent: ["Prof. Dr. Hasso Plattner"], 
        nameLV: "Trends and Concepts in the Software Industry I: Inner Mechanics of In-Memory Databases"
    }, 
	advancedDataProfiling: {
		kurz: "adv Data <br />Profiling",
        kennung: ["VT BPET", "VT OSIS"], 
        lehrform: ["Projekt", " Seminar"], 
        modul: ["Vertiefungsgebiete"],  
        semester: [ws13_14], 
        benotet: true, 
        vertiefung: [""], 
        cp: 4, 
        dozent: ["Prof. Dr. Felix Naumann", "Thorsten Papenbrock"], 
        nameLV: "Advanced Data Profiling"
    }, 
	softwareEngineeringEmbeddedSystems: {
		kurz: "SE for<br />Embedded Systems",
        kennung: ["ITSE", "VT SAMT"], 
        lehrform: ["Vorlesung", " \u00dcbung", " Projekt"], 
        modul: ["IT-Systems Engineering", " Vertiefungsgebiete"],  
        semester: [ws13_14], 
        benotet: true, 
        vertiefung: ["Mobile & Embedded Systems", " Systems Architecture", " Software Engineering", " Security and Safety Engineering"], 
        cp: 6, 
        dozent: ["Prof. Dr. Holger Giese"], 
        nameLV: "Software Engineering for Embedded Systems"
    }, 
    InMemoryDataManagementResearch: {
		kurz: "InMem Data<br />Management",
        kennung: ["VT BPET", "VT OSIS", "VT SAMT"], 
        lehrform: ["Seminar"], 
        modul: ["Vertiefungsgebiete"],  
        semester: [ws13_14], 
        benotet: true, 
        vertiefung: [""], 
        cp: 6, 
        dozent: ["Dr. Matthias Uflacker", "Dipl.-Kfm. Jens Kr\u00fcger"], 
        nameLV: "In-Memory Data Management Research"
    }, 
	konzepteParallelerProgrammierung: {
		kurz: "Parallel<br />Programming",
        kennung: ["ITSE", "VT OSIS"], 
        lehrform: ["Vorlesung"], 
        modul: ["Vertiefungsgebiete"],  
        semester: [ws13_14], 
        benotet: true, 
        vertiefung: [""], 
        cp: 6, 
        dozent: ["Dr. Peter Tr\u00f6ger"], 
        nameLV: "Konzepte paralleler Programmierung"
    }
	
}