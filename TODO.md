# Task: Separate Design/JS/Languages to external files & secure API keys for gh-pages

## Steps (8/10 complete)

### Phase 1: Extract Assets (Steps 1-3)
- [x] 1. Create `css/style.css` (extract <style> from index.html)
- [x] 2. Create `js/script.js` (extract <script> including T/translations from index.html)
- [ ] 3. Update `index.html` (remove inlines, add <link> to CSS &amp; <script src> to JS)

### Phase 2: Secure API Keys (Steps 4-7)
- [x] 4. Create `.gitignore` (.env, keys-built.js)
- [x] 5. Create `.env.example` (API key placeholders)
- [x] 6. Create `js/keys-built.js` (built keys)
- [x] 7. Create `build.js` (Node script: read .env → generate js/keys-built.js)

### Phase 3: Update Docs & Test (Steps 8-10)
- [x] 8. Update `README.md` (deploy instructions)
- [ ] 9. Test: Verify languages/contact/RTL work (run `node build.js`, open index.html)
- [ ] 10. Complete: Run `attempt_completion`

**Next: Start Phase 1 with css/style.css**

