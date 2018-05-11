class Location < ApplicationRecord

  def time_diff
    now = Time.now.strftime("%H:%M").to_i
    diff_from_now = 17 - now
    # p diff_from_now
  end

  def offset
    local = Time.now.strftime("%z").to_i / 100
    dtz = local + time_diff
  end

  def find_location
    dtz = offset
    Location.where("tz_offset = #{dtz}")

  end

end
