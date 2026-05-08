const mongoose = require('mongoose');

const TeamSettingSchema = new mongoose.Schema({
  heroTitle: { type: String, default: 'OUR TEAM' },
  heroDescription: { type: String, default: 'Expertise Across Sectors & Locations' },
  structureTitle: { type: String, default: 'Team Structure' },
  structureContent: { type: String, default: 'We appoint <span class="font-bold text-slate-900">experts of different sectors</span> on Retainership to enroll in our Team irrespective of locations to assist and supervise our Projects.' },
  competencies: [
    {
      iconName: { type: String, default: 'Briefcase' },
      title: { type: String, default: 'Industry Experts' },
      description: { type: String, default: 'Specialists from IT, Textile, FMCG, and more.' }
    },
    {
      iconName: { type: String, default: 'MapPin' },
      title: { type: String, default: 'Location Independent' },
      description: { type: String, default: 'Operating across multiple cities efficiently.' }
    },
    {
      iconName: { type: String, default: 'CheckCircle' },
      title: { type: String, default: 'Retainership Model' },
      description: { type: String, default: 'Ensuring long-term commitment and quality.' }
    }
  ]
}, { timestamps: true });

module.exports = mongoose.model('TeamSetting', TeamSettingSchema);
