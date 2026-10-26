/**
 * REAL MADRID CF — COMPONENT LOGIC & INTERACTION ENGINE
 */

(function () {
  'use strict';

  const data = window.REAL_MADRID_DATA;
  if (!data) {
    console.error("Real Madrid data not found.");
    return;
  }

  // DOM utility helper
  const $ = (selector, parent = document) => parent.querySelector(selector);
  const $$ = (selector, parent = document) => Array.from(parent.querySelectorAll(selector));

  /* ==========================================================================
     1. HERO COUNTDOWN & MARQUEE
     ========================================================================== */
  function initHeroCountdown() {
    const daysEl = $('#cd-days');
    const hoursEl = $('#cd-hours');
    const minsEl = $('#cd-mins');
    const secsEl = $('#cd-secs');

    if (!daysEl || !hoursEl || !minsEl || !secsEl) return;

    // Set target date (Next major matchday)
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 3);
    targetDate.setHours(21, 0, 0, 0);

    function update() {
      const now = new Date();
      const diff = targetDate - now;

      if (diff <= 0) {
        daysEl.textContent = '00';
        hoursEl.textContent = '00';
        minsEl.textContent = '00';
        secsEl.textContent = '00';
        return;
      }

      const d = Math.floor(diff / (1000 * 60 * 60 * 24));
      const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const m = Math.floor((diff / 1000 / 60) % 60);
      const s = Math.floor((diff / 1000) % 60);

      daysEl.textContent = String(d).padStart(2, '0');
      hoursEl.textContent = String(h).padStart(2, '0');
      minsEl.textContent = String(m).padStart(2, '0');
      secsEl.textContent = String(s).padStart(2, '0');
    }

    update();
    setInterval(update, 1000);
  }

  /* ==========================================================================
     2. FIRST TEAM SQUAD COMPONENT
     ========================================================================== */
  function initSquad() {
    const grid = $('#squad-grid');
    const filterBtns = $$('.squad-filter-btn');
    if (!grid) return;

    function renderPlayers(filter = 'all') {
      const players = filter === 'all'
        ? data.firstTeam
        : data.firstTeam.filter(p => p.category === filter);

      grid.innerHTML = players.map(player => `
        <div class="player-card" data-id="${player.id}" tabindex="0" role="button" aria-label="View profile of ${player.name}">
          <div class="player-card-inner">
            <div class="player-number-watermark">${player.number}</div>
            <div class="player-badge-top">
              <span class="player-pos-pill">${player.position}</span>
              <span class="player-flag" title="${player.nationality}">${player.flag}</span>
            </div>
            <div class="player-img-wrap">
              <img src="${player.image}" alt="${player.name}" loading="lazy" onerror="this.src='assets/images/player-placeholder.svg'">
              <div class="player-img-gradient"></div>
            </div>
            <div class="player-card-content">
              <div class="player-card-meta">
                <span class="player-kit-number">#${player.number}</span>
                <span class="player-origin">${player.nationality}</span>
              </div>
              <h3 class="player-name">${player.name}</h3>
              <div class="player-mini-stats">
                ${player.stats.goals !== undefined ? `<span><strong>${player.stats.goals}</strong> Goals</span>` : ''}
                ${player.stats.appearances !== undefined ? `<span><strong>${player.stats.appearances}</strong> Apps</span>` : ''}
                ${player.stats.trophies !== undefined ? `<span><strong>${player.stats.trophies}</strong> Trophies</span>` : ''}
              </div>
              <button class="player-dossier-btn">
                <span>View Dossier</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </button>
            </div>
          </div>
        </div>
      `).join('');

      // Add click listeners to cards
      $$('.player-card', grid).forEach(card => {
        card.addEventListener('click', () => {
          const playerId = card.getAttribute('data-id');
          openPlayerModal(playerId);
        });
        card.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            const playerId = card.getAttribute('data-id');
            openPlayerModal(playerId);
          }
        });
      });
    }

    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.getAttribute('data-filter');
        renderPlayers(filter);
      });
    });

    renderPlayers('all');
  }

  function openPlayerModal(playerId) {
    const player = data.firstTeam.find(p => p.id === playerId);
    if (!player) return;

    const modal = $('#player-modal');
    const modalBody = $('#player-modal-body');
    if (!modal || !modalBody) return;

    modalBody.innerHTML = `
      <div class="player-dossier">
        <div class="player-dossier-media">
          <img src="${player.image}" alt="${player.name}" onerror="this.src='assets/images/player-placeholder.svg'">
          <div class="player-dossier-quote">
            <svg class="quote-icon" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
            <p>"${player.quote}"</p>
          </div>
        </div>
        <div class="player-dossier-info">
          <div class="dossier-header">
            <div class="dossier-tags">
              <span class="dossier-badge gold">#${player.number}</span>
              <span class="dossier-badge">${player.position}</span>
              <span class="dossier-badge">${player.nationality} ${player.flag}</span>
            </div>
            <h2 class="dossier-title">${player.name}</h2>
            <p class="dossier-joined">Madridista since ${player.joined}</p>
          </div>

          <div class="dossier-specs-grid">
            <div class="spec-item"><span class="spec-label">Born</span><span class="spec-val">${player.dob}</span></div>
            <div class="spec-item"><span class="spec-label">Height</span><span class="spec-val">${player.height}</span></div>
            <div class="spec-item"><span class="spec-label">Preferred Foot</span><span class="spec-val">${player.preferredFoot}</span></div>
            <div class="spec-item"><span class="spec-label">Honours with Madrid</span><span class="spec-val">${player.stats.trophies || '—'} Trophies</span></div>
          </div>

          <div class="dossier-bio">
            <h4>Player Profile</h4>
            <p>${player.bio}</p>
          </div>

          ${player.attributes ? `
            <div class="dossier-attributes">
              <h4>Tactical Metrics</h4>
              <div class="attr-grid">
                ${Object.entries(player.attributes).map(([attr, val]) => `
                  <div class="attr-item">
                    <div class="attr-meta">
                      <span class="attr-name">${attr.toUpperCase()}</span>
                      <span class="attr-val">${val}</span>
                    </div>
                    <div class="attr-bar-bg">
                      <div class="attr-bar-fill" style="width: ${val}%;"></div>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
          ` : ''}
        </div>
      </div>
    `;

    openModal(modal);
  }

  /* ==========================================================================
     3. MATCH CENTER COMPONENT
     ========================================================================== */
  function initMatches() {
    const upcomingContainer = $('#upcoming-matches-list');
    const recentContainer = $('#recent-matches-list');
    const tabBtns = $$('.match-tab-btn');

    if (upcomingContainer) {
      upcomingContainer.innerHTML = data.matches.upcoming.map(m => `
        <div class="match-fixture-card" data-id="${m.id}">
          <div class="match-card-header">
            <span class="match-comp">${m.competition}</span>
            <span class="match-stage-tag">${m.stage}</span>
          </div>
          <div class="match-teams-row">
            <div class="match-team home">
              <img src="${m.homeCrest}" alt="${m.homeTeam}" class="team-crest" onerror="this.src='assets/images/real-madrid-crest.svg'">
              <span class="team-name">${m.homeTeam}</span>
            </div>
            <div class="match-center-info">
              <span class="match-time-badge">${m.time}</span>
              <span class="match-date-sub">${m.date}</span>
              <span class="match-venue-sub">${m.venue}</span>
            </div>
            <div class="match-team away">
              <img src="${m.awayCrest}" alt="${m.awayTeam}" class="team-crest" onerror="this.src='assets/images/real-madrid-crest.svg'">
              <span class="team-name">${m.awayTeam}</span>
            </div>
          </div>
          <div class="match-card-footer">
            <span class="ticket-status-pill"><span class="pulse-dot"></span> ${m.ticketStatus}</span>
            <button class="match-cta-btn" onclick="window.notifyToast('Official Bernabéu Ticket Portal: Redirecting to verified sales window...')">
              Match Details & Tickets
            </button>
          </div>
        </div>
      `).join('');
    }

    if (recentContainer) {
      recentContainer.innerHTML = data.matches.recent.map(m => `
        <div class="match-result-card" data-id="${m.id}" tabindex="0" role="button">
          <div class="match-card-header">
            <span class="match-comp">${m.competition}</span>
            <span class="match-status-tag highlight">${m.status}</span>
          </div>
          <div class="match-teams-row">
            <div class="match-team home">
              <img src="${m.homeCrest}" alt="${m.homeTeam}" class="team-crest" onerror="this.src='assets/images/real-madrid-crest.svg'">
              <span class="team-name">${m.homeTeam}</span>
            </div>
            <div class="match-score-badge">
              <span class="score-num ${m.homeScore > m.awayScore ? 'win' : ''}">${m.homeScore}</span>
              <span class="score-divider">-</span>
              <span class="score-num ${m.awayScore > m.homeScore ? 'win' : ''}">${m.awayScore}</span>
            </div>
            <div class="match-team away">
              <img src="${m.awayCrest}" alt="${m.awayTeam}" class="team-crest" onerror="this.src='assets/images/real-madrid-crest.svg'">
              <span class="team-name">${m.awayTeam}</span>
            </div>
          </div>
          <div class="match-scorers-preview">
            ${m.scorers.map(s => `<span>⚽ ${s.player} (${s.minute})</span>`).join(' • ')}
          </div>
          <div class="match-card-footer">
            <span class="match-venue-sub">${m.venue} • ${m.date}</span>
            <button class="match-cta-btn secondary">Match Report & Lineup</button>
          </div>
        </div>
      `).join('');

      $$('.match-result-card', recentContainer).forEach(card => {
        card.addEventListener('click', () => {
          const matchId = card.getAttribute('data-id');
          openMatchModal(matchId);
        });
      });
    }

    tabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        tabBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const tab = btn.getAttribute('data-tab');

        if (tab === 'upcoming') {
          if (upcomingContainer) upcomingContainer.style.display = 'grid';
          if (recentContainer) recentContainer.style.display = 'none';
        } else {
          if (upcomingContainer) upcomingContainer.style.display = 'none';
          if (recentContainer) recentContainer.style.display = 'grid';
        }
      });
    });
  }

  function openMatchModal(matchId) {
    const match = data.matches.recent.find(m => m.id === matchId);
    if (!match) return;

    const modal = $('#match-modal');
    const modalBody = $('#match-modal-body');
    if (!modal || !modalBody) return;

    modalBody.innerHTML = `
      <div class="match-detail-view">
        <div class="match-detail-header">
          <span class="match-comp-badge">${match.competition}</span>
          <p class="match-detail-venue">${match.venue} • ${match.date}</p>
          <div class="scoreboard-hero">
            <div class="team-side">
              <img src="${match.homeCrest}" alt="${match.homeTeam}" class="team-crest-large" onerror="this.src='assets/images/real-madrid-crest.svg'">
              <span class="team-title">${match.homeTeam}</span>
            </div>
            <div class="score-display">
              <span class="score-digit">${match.homeScore}</span>
              <span class="score-col">:</span>
              <span class="score-digit">${match.awayScore}</span>
            </div>
            <div class="team-side">
              <img src="${match.awayCrest}" alt="${match.awayTeam}" class="team-crest-large" onerror="this.src='assets/images/real-madrid-crest.svg'">
              <span class="team-title">${match.awayTeam}</span>
            </div>
          </div>
          <div class="match-verdict-banner">${match.status}</div>
        </div>

        <div class="match-detail-grid">
          <div class="match-timeline-box">
            <h4>Key Moments & Goals</h4>
            <ul class="timeline-list">
              ${match.scorers.map(s => `
                <li class="timeline-item">
                  <span class="minute-pill">${s.minute}</span>
                  <div class="event-desc">
                    <strong>${s.player}</strong>
                    <span class="event-club">${s.team}</span>
                  </div>
                </li>
              `).join('')}
            </ul>
          </div>

          <div class="match-stats-box">
            <h4>Match Analytics</h4>
            <div class="stat-row-item">
              <span class="stat-name">Possession</span>
              <span class="stat-val">${match.stats.possession}</span>
            </div>
            <div class="stat-row-item">
              <span class="stat-name">Shots on Target</span>
              <span class="stat-val">${match.stats.shotsOnTarget}</span>
            </div>
            <div class="stat-row-item">
              <span class="stat-name">Corner Kicks</span>
              <span class="stat-val">${match.stats.corners}</span>
            </div>
            <div class="stat-row-item">
              <span class="stat-name">Fouls</span>
              <span class="stat-val">${match.stats.fouls}</span>
            </div>
          </div>
        </div>

        <div class="match-lineup-box">
          <h4>Real Madrid Starting XI</h4>
          <p class="lineup-names">${match.lineup}</p>
        </div>
      </div>
    `;

    openModal(modal);
  }

  /* ==========================================================================
     4. TROPHY CABINET & VISUAL TIMELINE
     ========================================================================== */
  function initTrophies() {
    const container = $('#trophies-cabinet-grid');
    if (!container) return;

    container.innerHTML = data.trophies.categories.map(trophy => `
      <div class="trophy-card" data-id="${trophy.id}" tabindex="0" role="button" aria-label="View ${trophy.title}">
        <div class="trophy-card-header">
          <span class="trophy-badge">${trophy.badge}</span>
          <span class="trophy-count-big">${trophy.count}</span>
        </div>
        <div class="trophy-icon-wrap">
          <img src="${trophy.icon}" alt="${trophy.title}" class="trophy-svg" onerror="this.src='assets/icons/trophy-ucl.svg'">
        </div>
        <div class="trophy-content">
          <h3 class="trophy-title">${trophy.title}</h3>
          <p class="trophy-desc">${trophy.description}</p>
          <div class="trophy-years-tags">
            ${trophy.years.slice(0, 7).map(y => `<span class="year-pill">${y}</span>`).join('')}
            ${trophy.years.length > 7 ? `<span class="year-pill more">+${trophy.years.length - 7} more</span>` : ''}
          </div>
          <button class="trophy-explore-btn">
            <span>Explore Victories</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </button>
        </div>
      </div>
    `).join('');

    $$('.trophy-card', container).forEach(card => {
      card.addEventListener('click', () => {
        const id = card.getAttribute('data-id');
        openTrophyModal(id);
      });
    });
  }

  function openTrophyModal(trophyId) {
    const trophy = data.trophies.categories.find(t => t.id === trophyId);
    if (!trophy) return;

    const modal = $('#trophy-modal');
    const modalBody = $('#trophy-modal-body');
    if (!modal || !modalBody) return;

    modalBody.innerHTML = `
      <div class="trophy-dossier">
        <div class="trophy-modal-header">
          <div class="trophy-modal-icon">
            <img src="${trophy.icon}" alt="${trophy.title}" onerror="this.src='assets/icons/trophy-ucl.svg'">
          </div>
          <div>
            <span class="dossier-badge gold">${trophy.badge}</span>
            <h2 class="dossier-title">${trophy.title}</h2>
            <p class="trophy-modal-subtitle">${trophy.count} Championships in Real Madrid CF History</p>
          </div>
        </div>

        <p class="trophy-modal-full-desc">${trophy.description}</p>

        <div class="trophy-all-years">
          <h4>Championship Years (${trophy.years.length})</h4>
          <div class="years-cloud">
            ${trophy.years.map(y => `<span class="year-tag-active">${y}</span>`).join('')}
          </div>
        </div>

        ${trophy.milestones ? `
          <div class="trophy-milestones">
            <h4>Iconic Triumph Milestones</h4>
            <div class="milestones-grid">
              ${trophy.milestones.map(m => `
                <div class="milestone-card">
                  <h5 class="milestone-name">${m.name}</h5>
                  <p class="milestone-desc">${m.desc}</p>
                </div>
              `).join('')}
            </div>
          </div>
        ` : ''}
      </div>
    `;

    openModal(modal);
  }

  /* ==========================================================================
     5. CLUB HISTORY TIMELINE
     ========================================================================== */
  function initHistory() {
    const navContainer = $('#history-era-nav');
    const displayContainer = $('#history-era-display');
    if (!navContainer || !displayContainer) return;

    navContainer.innerHTML = data.history.map((h, idx) => `
      <button class="era-tab-btn ${idx === 0 ? 'active' : ''}" data-index="${idx}">
        <span class="era-years">${h.era}</span>
        <span class="era-label">${h.title}</span>
      </button>
    `).join('');

    function renderEra(index) {
      const era = data.history[index];
      if (!era) return;

      displayContainer.innerHTML = `
        <div class="history-era-card">
          <div class="history-era-media">
            <img src="${era.image}" alt="${era.title}" onerror="this.src='assets/images/stadium-placeholder.svg'">
            <div class="history-era-overlay">
              <span class="era-badge-date">${era.era}</span>
              <span class="era-stats-pill">${era.stats}</span>
            </div>
          </div>
          <div class="history-era-content">
            <span class="era-kicker">${era.subtitle}</span>
            <h3 class="era-headline">${era.title}</h3>
            <p class="era-narrative">${era.description}</p>
            <div class="era-highlights-box">
              <h4>Epoch Defining Highlights</h4>
              <ul>
                ${era.highlights.map(hl => `<li><span class="gold-bullet">✦</span> ${hl}</li>`).join('')}
              </ul>
            </div>
          </div>
        </div>
      `;
    }

    const eraBtns = $$('.era-tab-btn', navContainer);
    eraBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        eraBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const idx = parseInt(btn.getAttribute('data-index'), 10);
        renderEra(idx);
      });
    });

    renderEra(0);
  }

  /* ==========================================================================
     6. LEGENDS COMPONENT
     ========================================================================== */
  function initLegends() {
    const container = $('#legends-grid');
    if (!container) return;

    container.innerHTML = data.legends.map(legend => `
      <div class="legend-card" data-id="${legend.id}" tabindex="0" role="button" aria-label="View legend ${legend.name}">
        <div class="legend-img-wrap">
          <img src="${legend.image}" alt="${legend.name}" loading="lazy" onerror="this.src='assets/images/player-placeholder.svg'">
          <div class="legend-gradient"></div>
          <div class="legend-years-pill">${legend.years}</div>
        </div>
        <div class="legend-info">
          <span class="legend-moniker">"${legend.moniker}"</span>
          <h3 class="legend-name">${legend.name}</h3>
          <span class="legend-pos">${legend.position}</span>
          
          <div class="legend-stats-strip">
            <div class="stat-col">
              <span class="stat-number">${legend.uclTrophies}</span>
              <span class="stat-desc">UCL Titles</span>
            </div>
            <div class="stat-col">
              <span class="stat-number">${legend.appearances}</span>
              <span class="stat-desc">Matches</span>
            </div>
            <div class="stat-col">
              <span class="stat-number">${legend.goals !== undefined ? legend.goals : legend.cleanSheets}</span>
              <span class="stat-desc">${legend.goals !== undefined ? 'Goals' : 'Clean Sheets'}</span>
            </div>
          </div>

          <p class="legend-quote">"${legend.quote}"</p>
          <button class="legend-profile-btn">
            <span>Read Legend Story</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </button>
        </div>
      </div>
    `).join('');

    $$('.legend-card', container).forEach(card => {
      card.addEventListener('click', () => {
        const id = card.getAttribute('data-id');
        openLegendModal(id);
      });
    });
  }

  function openLegendModal(legendId) {
    const legend = data.legends.find(l => l.id === legendId);
    if (!legend) return;

    const modal = $('#legend-modal');
    const modalBody = $('#legend-modal-body');
    if (!modal || !modalBody) return;

    modalBody.innerHTML = `
      <div class="player-dossier legend-modal-dossier">
        <div class="player-dossier-media">
          <img src="${legend.image}" alt="${legend.name}">
          <div class="player-dossier-quote">
            <svg class="quote-icon" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
            <p>"${legend.quote}"</p>
          </div>
        </div>
        <div class="player-dossier-info">
          <div class="dossier-header">
            <div class="dossier-tags">
              <span class="dossier-badge gold">${legend.years}</span>
              <span class="dossier-badge">${legend.position}</span>
              <span class="dossier-badge">${legend.uclTrophies}x European Champion</span>
            </div>
            <h2 class="dossier-title">${legend.name}</h2>
            <p class="dossier-joined">"${legend.moniker}"</p>
          </div>

          <div class="dossier-specs-grid">
            <div class="spec-item"><span class="spec-label">Appearances</span><span class="spec-val">${legend.appearances}</span></div>
            <div class="spec-item"><span class="spec-label">${legend.goals !== undefined ? 'Goals' : 'Clean Sheets'}</span><span class="spec-val">${legend.goals !== undefined ? legend.goals : legend.cleanSheets}</span></div>
            <div class="spec-item"><span class="spec-label">European Cups</span><span class="spec-val">${legend.uclTrophies}</span></div>
            <div class="spec-item"><span class="spec-label">Key Honors</span><span class="spec-val">${legend.honors}</span></div>
          </div>

          <div class="dossier-bio">
            <h4>White Legacy & Sporting Impact</h4>
            <p>${legend.legacy}</p>
          </div>
        </div>
      </div>
    `;

    openModal(modal);
  }

  /* ==========================================================================
     7. STADIUM EXPERIENCE INTERACTIVE SCHEMATICS
     ========================================================================== */
  function initStadium() {
    const featureList = $('#stadium-features-list');
    const descBox = $('#stadium-feature-details');
    if (!featureList || !descBox) return;

    featureList.innerHTML = data.stadiumExperience.features.map((feat, idx) => `
      <button class="stadium-feat-item ${idx === 0 ? 'active' : ''}" data-id="${feat.id}">
        <span class="feat-num">0${idx + 1}</span>
        <div class="feat-content">
          <h4>${feat.title}</h4>
        </div>
        <span class="feat-arrow">→</span>
      </button>
    `).join('');

    function renderFeature(id) {
      const feat = data.stadiumExperience.features.find(f => f.id === id);
      if (!feat) return;

      descBox.innerHTML = `
        <div class="feature-active-card">
          <span class="feature-tech-badge">SANTIAGO BERNABÉU INNOVATION</span>
          <h3 class="feature-title">${feat.title}</h3>
          <p class="feature-description">${feat.desc}</p>
          <div class="feature-specs-row">
            <div class="spec-pill">
              <span class="lbl">STADIUM CAPACITY</span>
              <span class="val">84,700 Seats</span>
            </div>
            <div class="spec-pill">
              <span class="lbl">LOCATION</span>
              <span class="val">Chamartín, Madrid</span>
            </div>
            <div class="spec-pill">
              <span class="lbl">OPERATION</span>
              <span class="val">365 Days / Year</span>
            </div>
          </div>
        </div>
      `;
    }

    const featBtns = $$('.stadium-feat-item', featureList);
    featBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        featBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const id = btn.getAttribute('data-id');
        renderFeature(id);
      });
    });

    renderFeature(data.stadiumExperience.features[0].id);
  }

  /* ==========================================================================
     8. NEWS & EDITORIAL COMPONENT
     ========================================================================== */
  function initNews() {
    const container = $('#news-grid');
    const filterBtns = $$('.news-filter-btn');
    if (!container) return;

    function renderArticles(category = 'all') {
      const articles = category === 'all'
        ? data.news
        : data.news.filter(n => n.category.toLowerCase().includes(category.toLowerCase()));

      container.innerHTML = articles.map(article => `
        <article class="news-card" data-id="${article.id}" tabindex="0" role="button" aria-label="Read: ${article.title}">
          <div class="news-img-wrap">
            <img src="${article.image}" alt="${article.title}" loading="lazy" onerror="this.src='assets/images/stadium-placeholder.svg'">
            <span class="news-cat-tag">${article.category}</span>
          </div>
          <div class="news-body">
            <div class="news-meta">
              <span>${article.date}</span> • <span>${article.readTime}</span>
            </div>
            <h3 class="news-title">${article.title}</h3>
            <p class="news-excerpt">${article.excerpt}</p>
            <div class="news-footer">
              <span class="news-author">By ${article.author}</span>
              <span class="news-read-more">Read Story →</span>
            </div>
          </div>
        </article>
      `).join('');

      $$('.news-card', container).forEach(card => {
        card.addEventListener('click', () => {
          const id = card.getAttribute('data-id');
          openNewsModal(id);
        });
      });
    }

    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const cat = btn.getAttribute('data-filter');
        renderArticles(cat);
      });
    });

    renderArticles('all');
  }

  function openNewsModal(newsId) {
    const article = data.news.find(n => n.id === newsId);
    if (!article) return;

    const modal = $('#news-modal');
    const modalBody = $('#news-modal-body');
    if (!modal || !modalBody) return;

    modalBody.innerHTML = `
      <article class="editorial-article-view">
        <div class="editorial-header">
          <span class="dossier-badge gold">${article.category}</span>
          <h1 class="editorial-title">${article.title}</h1>
          <div class="editorial-meta-bar">
            <span>By <strong>${article.author}</strong></span> • 
            <span>${article.date}</span> • 
            <span>${article.readTime}</span>
          </div>
        </div>
        <div class="editorial-media">
          <img src="${article.image}" alt="${article.title}">
        </div>
        <div class="editorial-content">
          ${article.content.split('\n\n').map(p => `<p>${p}</p>`).join('')}
        </div>
        <div class="editorial-footer-bar">
          <button class="share-btn" onclick="window.notifyToast('Article link copied to clipboard!')">
            Share Story
          </button>
        </div>
      </article>
    `;

    openModal(modal);
  }

  /* ==========================================================================
     9. GALLERY LIGHTBOX COMPONENT
     ========================================================================== */
  let currentGalleryIndex = 0;
  let filteredGallery = [];

  function initGallery() {
    const grid = $('#gallery-grid');
    const filterBtns = $$('.gallery-filter-btn');
    if (!grid) return;

    function renderGallery(filter = 'all') {
      filteredGallery = filter === 'all'
        ? data.gallery
        : data.gallery.filter(g => g.category === filter);

      grid.innerHTML = filteredGallery.map((item, idx) => `
        <div class="gallery-item" data-index="${idx}" tabindex="0" role="button" aria-label="${item.title}">
          <img src="${item.image}" alt="${item.title}" loading="lazy" onerror="this.src='assets/images/stadium-placeholder.svg'">
          <div class="gallery-overlay">
            <span class="gallery-tag">${item.tag}</span>
            <h4 class="gallery-title">${item.title}</h4>
            <span class="gallery-zoom-icon">⊕</span>
          </div>
        </div>
      `).join('');

      $$('.gallery-item', grid).forEach(item => {
        item.addEventListener('click', () => {
          const idx = parseInt(item.getAttribute('data-index'), 10);
          openLightbox(idx);
        });
      });
    }

    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const f = btn.getAttribute('data-filter');
        renderGallery(f);
      });
    });

    renderGallery('all');
    initLightboxControls();
  }

  function openLightbox(index) {
    currentGalleryIndex = index;
    const item = filteredGallery[index];
    if (!item) return;

    const lb = $('#lightbox-modal');
    const lbImg = $('#lightbox-img');
    const lbTitle = $('#lightbox-title');
    const lbCaption = $('#lightbox-caption');
    const lbTag = $('#lightbox-tag');

    if (!lb || !lbImg) return;

    lbImg.src = item.image;
    if (lbTitle) lbTitle.textContent = item.title;
    if (lbCaption) lbCaption.textContent = item.caption;
    if (lbTag) lbTag.textContent = item.tag;

    openModal(lb);
  }

  function initLightboxControls() {
    const prevBtn = $('#lightbox-prev');
    const nextBtn = $('#lightbox-next');

    if (prevBtn) {
      prevBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (filteredGallery.length === 0) return;
        currentGalleryIndex = (currentGalleryIndex - 1 + filteredGallery.length) % filteredGallery.length;
        openLightbox(currentGalleryIndex);
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (filteredGallery.length === 0) return;
        currentGalleryIndex = (currentGalleryIndex + 1) % filteredGallery.length;
        openLightbox(currentGalleryIndex);
      });
    }

    // Keyboard navigation
    window.addEventListener('keydown', (e) => {
      const lb = $('#lightbox-modal');
      if (lb && lb.classList.contains('active')) {
        if (e.key === 'ArrowLeft' && prevBtn) prevBtn.click();
        if (e.key === 'ArrowRight' && nextBtn) nextBtn.click();
      }
    });
  }

  /* ==========================================================================
     10. MODAL MANAGER UTILITY
     ========================================================================== */
  function openModal(modalEl) {
    if (!modalEl) return;
    modalEl.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal(modalEl) {
    if (!modalEl) return;
    modalEl.classList.remove('active');
    document.body.style.overflow = '';
  }

  function initModals() {
    $$('.modal-backdrop').forEach(modal => {
      // Close button inside
      const closeBtn = modal.querySelector('.modal-close-btn');
      if (closeBtn) {
        closeBtn.addEventListener('click', () => closeModal(modal));
      }

      // Click outside content to close
      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          closeModal(modal);
        }
      });
    });

    // Escape key
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        $$('.modal-backdrop.active').forEach(m => closeModal(m));
      }
    });
  }

  /* ==========================================================================
     11. TOAST NOTIFICATION SYSTEM
     ========================================================================== */
  window.notifyToast = function (message) {
    let toast = $('#global-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'global-toast';
      toast.className = 'global-toast';
      document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.classList.add('show');

    clearTimeout(toast._timeout);
    toast._timeout = setTimeout(() => {
      toast.classList.remove('show');
    }, 3800);
  };

  /* ==========================================================================
     INIT ALL COMPONENTS ON DOM LOADED
     ========================================================================== */
  document.addEventListener('DOMContentLoaded', () => {
    initHeroCountdown();
    initSquad();
    initMatches();
    initTrophies();
    initHistory();
    initLegends();
    initStadium();
    initNews();
    initGallery();
    initModals();
  });

})();
