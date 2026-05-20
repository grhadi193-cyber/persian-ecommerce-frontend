import { create } from 'zustand';
import { getSiteSettings } from '../api/settings';

const useSettingsStore = create((set) => ({
  settings: null,
  loading: false,
  error: null,

  async fetchSettings() {
    set({ loading: true });
    try {
      const data = await getSiteSettings();
      set({ settings: data, loading: false });
      // Apply primary color dynamically
      if (data.primary_color) {
        document.documentElement.style.setProperty(
          '--color-primary',
          data.primary_color
        );
        // Auto-generate dark variant (15% darker)
        document.documentElement.style.setProperty(
          '--color-primary-dark',
          adjustColor(data.primary_color, -20)
        );
        document.documentElement.style.setProperty(
          '--color-primary-light',
          adjustColor(data.primary_color, 80, 0.1)
        );
      }
    } catch (e) {
      set({ loading: false, error: e.message });
    }
  },
}));

// Utility: lighten/darken hex color
function adjustColor(hex, amount, alpha = null) {
  hex = hex.replace('#', '');
  const num = parseInt(hex, 16);
  const r = Math.min(255, Math.max(0, (num >> 16) + amount));
  const g = Math.min(255, Math.max(0, ((num >> 8) & 0x00ff) + amount));
  const b = Math.min(255, Math.max(0, (num & 0x0000ff) + amount));
  if (alpha !== null) {
    return `rgba(${r},${g},${b},${alpha})`;
  }
  return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, '0')}`;
}

export default useSettingsStore;
