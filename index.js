import { useState } from 'react'

const data = {
  title: "Partez à l'aventure avec Dexter, le van qui transforme chaque route en liberté.",
  description:
    "Dexter, c’est le parfait équilibre entre confort et compacité. Avec ses 4 places carte grise et ses équipements tout confort (toilettes, douche, cuisine, panneaux solaires), il est idéal pour les familles comme pour les couples en quête d’évasion.",
  tech: {
    model: "Fiat Ducato",
    places_card: 4,
    places_bed: 3,
    equipment: ["WC", "Douche", "Cuisine", "Solaire"],
    year: "2023",
    location: "Suisse",
  },
  reservedDates: ["2025-07-10", "2025-07-11"],
  contactEmail: "contact@locvan.ch",
}

export default function Home() {
  const [reserved, setReserved] = useState([...data.reservedDates])
  const [selectedDate, setSelectedDate] = useState('')

  const handleDateSelect = (e) => {
    setSelectedDate(e.target.value)
  }

  const reserveDate = () => {
    if (selectedDate && !reserved.includes(selectedDate)) {
      setReserved([...reserved, selectedDate])
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <div className="bg-cover bg-center h-64 text-white text-center flex items-center justify-center" style={{ backgroundImage: `url('/default-van.jpg')` }}>
        <h1 className="text-4xl font-bold bg-black/60 p-4 rounded-xl">
          {data.title}
        </h1>
      </div>

      <div className="max-w-4xl mx-auto p-6">
        <p className="text-lg mb-6">{data.description}</p>

        <div className="bg-white rounded-xl shadow p-4 mb-6">
          <h2 className="text-2xl font-semibold mb-2">Données techniques</h2>
          <ul className="list-disc pl-5 text-sm">
            <li><strong>Modèle :</strong> {data.tech.model}</li>
            <li><strong>Places carte grise :</strong> {data.tech.places_card}</li>
            <li><strong>Places couchage :</strong> {data.tech.places_bed}</li>
            <li><strong>Équipements :</strong> {data.tech.equipment.join(', ')}</li>
            <li><strong>Année :</strong> {data.tech.year}</li>
            <li><strong>Localisation :</strong> {data.tech.location}</li>
          </ul>
        </div>

        <div className="bg-white rounded-xl shadow p-4 mb-6">
          <h2 className="text-2xl font-semibold mb-2">Réserver une date</h2>
          <input
            type="date"
            value={selectedDate}
            onChange={handleDateSelect}
            className="border p-2 rounded mr-2"
          />
          <button onClick={reserveDate} className="bg-green-600 text-white px-4 py-2 rounded">
            Réserver cette date
          </button>

          <div className="mt-4">
            <p className="font-semibold">Dates déjà réservées :</p>
            <ul className="list-disc pl-5 text-sm">
              {reserved.map((date, i) => (
                <li key={i}>{date}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="text-center">
          <a href={`mailto:${data.contactEmail}`} className="inline-block bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-xl">
            Réserver ce van
          </a>
        </div>
      </div>
    </div>
  )
}
