module.exports = {
  HUMINT: {
    codes: ['HUMINT'],
    name: "Human Intelligence",
    description: "The collection of information from human sources. The collection may be done openly, as when FBI agents interview witnesses or suspects, or it may be done through clandestine or covert means (espionage). Within the United States, HUMINT collection is the FBI’s responsibility. Beyond U.S. borders, HUMINT is generally collected by the CIA, but also by other U.S. components abroad. Although HUMINT is an important collection discipline for the FBI, we also collect intelligence through other methods, including SIGINT, MASINT, and OSINT."
  },
  SIGINT: {
    codes: ['SIGINT', 'COMINT'],
    name: "Signals Intelligence",
    description: "Refers to electronic transmissions that can be collected by ships, planes, ground sites, or satellites. Communications Intelligence (COMINT) is a type of SIGINT and refers to the interception of communications between two parties. U.S. SIGINT satellites are designed and built by the National Reconnaissance Office, although conducting U.S. signals intelligence activities is primarily the responsibility of the National Security Agency (NSA)."
  },
  IMINT: {
    codes: ['IMINT', 'PHOTOINT'],
    name: "Imagery Intelligence",
    description: "One of the earliest forms of IMINT took place during the Civil War, when soldiers were sent up in balloons to gather intelligence about their surroundings. IMINT was practiced to a greater extent in World Wars I and II when both sides took photographs from airplanes. Today, the National Reconnaissance Office designs, builds, and operates imagery satellites, while the National Geospatial-Intelligence Agency is largely responsible for processing and using the imagery."
  },
  MASINT: {
    codes: ['MASINT', 'TELINT', 'ELINT'],
    name: "Measurement and Signatures Intelligence",
    description: "A relatively little-known collection discipline that concerns weapons capabilities and industrial activities. MASINT includes the advanced processing and use of data gathered from overhead and airborne IMINT and SIGINT collection systems. Telemetry Intelligence (TELINT) is sometimes used to indicate data relayed by weapons during tests, while electronic intelligence (ELINT) can indicate electronic emissions picked up from modern weapons and tracking systems. Both TELINT and ELINT can be types of SIGINT and contribute to MASINT."
  },
  OSINT: {
    codes: ['OSINT'],
    name: "Open-Source Intelligence",
    description: "Open-Source Intelligence (OSINT) refers to a broad array of information and sources that are generally available, including information obtained from the media (newspapers, radio, television, etc.), professional and academic records (papers, conferences, professional associations, etc.), and public data (government reports, demographics, hearings, speeches, etc.). Unlike the other INTs, open-source intelligence is not the responsibility of any one agency, but instead is collected by the entire USIC. One advantage of OSINT is its accessibility, although the sheer amount of available information can make it difficult to know what is of value. Determining the data’s source and its reliability can also be complicated. OSINT data therefore still requires review and analysis to be of use to policymakers."
  }
}
