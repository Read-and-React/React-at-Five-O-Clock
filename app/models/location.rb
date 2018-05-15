class Location < ApplicationRecord

  scope :five_clock, -> do 
    where(tz_offset: (Time.now.strftime("%z").to_i / 100) + (16 - Time.now.strftime("%H:%M").to_i)) 
  end

  # def self.time_diff
  #   now = Time.now.strftime("%H:%M").to_i
  #   if Time.now.dst?
  #     diff_from_now = 16 - now
  #   else
  #     diff_from_now = 17 - now
  #   end
  # end

  # def self.offset
  #   local = Time.now.strftime("%z").to_i / 100
  #   dtz = local + time_diff
  # end

end
