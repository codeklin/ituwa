
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function ContactInfo() {
  return (
    <div className="bg-gray-50 p-6 rounded-lg">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">Contact Information</h3>
      <div className="space-y-4">
        {/*}
        <div className="flex items-start space-x-3">
          <Mail className="w-5 h-5 text-indigo-600 mt-1" />
          <div>
            <p className="font-medium text-gray-900">Email</p>
            <a href="mailto:hello@ituwa.com" className="text-gray-600 hover:text-indigo-600">
              hello@ituwa.com
            </a>
          </div>
        </div>
        <div className="flex items-start space-x-3">
          <Phone className="w-5 h-5 text-indigo-600 mt-1" />
          <div>
            <p className="font-medium text-gray-900">Phone</p>
            <a href="tel:+2347031098097" className="text-gray-600 hover:text-indigo-600">
              +234 701 8643 642
            </a>
          </div>
        </div>
        <div className="flex items-start space-x-3">
          <MapPin className="w-5 h-5 text-indigo-600 mt-1" />
          <div>
            <p className="font-medium text-gray-900">Location</p>
            <p className="text-gray-600">Lagos Island, Nigeria</p>
          </div>
        </div>
        */}
        <div className="flex items-start space-x-3">
          <Clock className="w-5 h-5 text-indigo-600 mt-1" />
          <div>
            <p className="font-medium text-gray-900">Training Hours</p>
            <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
            <p className="text-gray-600">Saturday: 10:00 AM - 4:00 PM</p>
          </div>
        </div>
      </div>
    </div>
  );
}